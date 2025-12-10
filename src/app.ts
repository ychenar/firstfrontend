import Fastify from "fastify";
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
app.get("/", async (req, reply) => {
  return "from the homepage route🔥";
});
app.register(userRoute, { prefix: "/user" });
app.register(healthRoute, { prefix: "/health" }); 

export default app;
