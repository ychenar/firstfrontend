import Fastify from "fastify";
import staticPlugin from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import { FastifyInstance } from "fastify";
import {loggingP} from "./plugins/loggingP";
import corsP from "./plugins/corsP";
import { userRoute } from "./routes/user";
import { healthRoute } from "./routes/health";
import {contactRoute} from './routes/contact';

const app: FastifyInstance = Fastify({ logger: true, });

// First we Register Plugings
app.register(corsP);
app.register(loggingP);



// Then routes

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.register(staticPlugin, {
  root: path.join(__dirname, '../public'),  // Points to project root/public
  prefix: '/',  // Serve on root (e.g., /index.html)
  wildcard: false,
})

app.register(contactRoute, { prefix: '/api/contact' })
app.register(userRoute, { prefix: "/user" });
app.register(healthRoute, { prefix: "/health" }); 

export default app;
