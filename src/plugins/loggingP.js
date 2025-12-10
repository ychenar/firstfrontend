// src/plugins/logging.js
export default async function loggingP(fastify, opts) {
  
  fastify.addHook("preHandler", (request, reply, done) => {
    request.log.info({
        method: request.method,
        // these show up beautifully in logs
        url: request.url,
        ip: request.ip},"incoming request");
    done(); // don't forget this in non-async hooks
  });

  fastify.addHook("onResponse", (request, reply, done) => {
    request.log.info({
        responseTime: reply.getResponseTime(),
        statusCode: reply.statusCode},"request completed");
    done();
  });
}
