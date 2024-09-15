import Anthropic from "@anthropic-ai/sdk";

async function askClaude(content: string) {
  const anthropic = new Anthropic({
    apiKey: process.env.claudeAPIKey,
  });

  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1024,
    messages: [{ role: "user", content }],
  });

  return msg;
}

console.log(await askClaude("Hello Claude :)"));
