import Fastify from "fastify";
import loggingP from "./plugins/loggingP.js";
import corsP from "./plugins/corsP.js";
import userR from "./routes/user.js";
import healthR from "./routes/health.js";

const app = Fastify({ logger: true, });

// First we Register Plugings
app.register(corsP);
app.register(loggingP);

// Then routes
app.get("/", async (req, reply) => {
  return "from the homepage route🔥";
});
app.register(userR, { prefix: "/user" });
app.register(healthR, { prefix: "/health" }); 

export default app;
