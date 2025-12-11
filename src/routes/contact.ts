import type { FastifyPluginAsync } from 'fastify'
import { contactS } from '../schemas/contactS';
import { contactH } from '../handlers/contactH';

export const contactRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post('/', {
    schema: {
      body: contactS,
      response: 201 }
  }, contactH)};