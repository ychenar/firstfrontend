// src/plugins/logging.js
import type { FastifyPluginAsync } from "fastify";

export const loggingP: FastifyPluginAsync = async (fastify, opts) => {
  
  fastify.addHook("preHandler", (request, reply, done) => {
    // Store the start time on the request object
    (request as any).startTime = process.hrtime();
    request.log.info({
        method: request.method,
        // these show up beautifully in logs
        url: request.url,
        ip: request.ip},"incoming request");
    done(); // don't forget this in non-async hooks
  });

  fastify.addHook("onResponse", (request, reply, done) => {
    // Calculate response time
    const startTime = (request as any).startTime as [number, number] | undefined;
    let responseTime: number | undefined = undefined;
    if (startTime) {
      const diff = process.hrtime(startTime);
      responseTime = diff[0] * 1e3 + diff[1] / 1e6; // ms
    }
    request.log.info({
        responseTime,
        statusCode: reply.statusCode},"request completed");
    done();
  });
};