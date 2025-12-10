// src/plugins/cors.js
export default async function corsP(fastify, opts) {
  fastify.register(import("@fastify/cors"), {
    origin: true, // or ['http://localhost:5000', 'https://yourfrontend.com']
    credentials: true,
  });
}
