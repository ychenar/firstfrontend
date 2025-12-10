import Fastify from "fastify";
import staticPlugin from "@fastify/static";
import path from "node:path";
import { FastifyInstance } from "fastify";
import {loggingP} from "./plugins/loggingP";
import corsP from "./plugins/corsP";
import { userRoute } from "./routes/user";
import { healthRoute } from "./routes/health";

const app: FastifyInstance = Fastify({ logger: true, });

// First we Register Plugings
app.register(corsP);
app.register(loggingP);


// Then routes
app.register(staticPlugin, {
  root: path.join(__dirname, '../public'),  // Path to your public folder
  wildcard: false,                          // Only serve exact files
})
app.get("/", async (req, reply) => {
  return "from the homepage route🔥";
});
app.register(userRoute, { prefix: "/user" });
app.register(healthRoute, { prefix: "/health" }); 

export default app;
