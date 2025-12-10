// src/routes/health.js
import { FastifyPluginAsync } from "fastify";

export const healthRoute: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get("/", async () => {
    return { status: "OK", timestamp: new Date().toISOString() };
  });
}
