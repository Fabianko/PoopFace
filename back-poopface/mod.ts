// mod.ts

import { handleWs } from "./src/utils/websocket.ts";
import { PORT } from "./config.ts";


const handler = (request: Request): Response => {
    const body = `Your user-agent is:\n\n${
      request.headers.get("user-agent") ?? "Unknown"
    }`;
  
    return new Response(body, { status: 200 });
  };

function main() {
    const server = Deno.serve({ port: PORT },handler);
    console.log("Server running on http://localhost:/"+PORT);
}

main();
