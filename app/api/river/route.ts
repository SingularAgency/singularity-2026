import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Singularity's River processor — an AI that transforms raw meeting transcripts into structured product intelligence.

Given a meeting transcript, extract:
1. KEY_DECISIONS: The concrete decisions made (list of strings)
2. SPECS: Technical specifications implied by those decisions (list of objects with title + description)
3. USER_STORIES: Actionable user stories in "As a [role], I want [action], so that [benefit]" format (list with: id, title, story, routing as "agent" or "human", reasoning for routing, estimated tokens if agent)

Routing rules:
- Route to "agent" if: UI changes, API integrations, cron jobs, data processing, standard CRUD, code generation, testing
- Route to "human" if: hardware/IoT, complex architecture decisions, new infrastructure, security auditing, novel algorithms

Respond ONLY with valid JSON matching this exact structure:
{
  "keyDecisions": ["string"],
  "specs": [{"title": "string", "description": "string"}],
  "userStories": [
    {
      "id": "string",
      "title": "string",
      "story": "string",
      "routing": "agent" | "human",
      "routingReason": "string",
      "estimatedTokens": number | null
    }
  ]
}`;

export async function POST(request: Request) {
  try {
    const { transcript } = await request.json();

    if (!transcript || typeof transcript !== "string") {
      return Response.json({ error: "Transcript required" }, { status: 400 });
    }

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Process this meeting transcript and extract structured product intelligence:\n\n${transcript.slice(0, 8000)}`,
        },
      ],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(chunk.delta.text)
              );
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("River API error:", error);
    return Response.json({ error: "Processing failed" }, { status: 500 });
  }
}
