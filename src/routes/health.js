// src/routes/health.js
export default async function healthRoutes(fastify, opts) {
  fastify.get("/", async () => {
    return { status: "OK", timestamp: new Date().toISOString() };
  });
}
