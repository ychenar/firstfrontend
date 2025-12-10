// src/routes/user.js
import { FastifyPluginAsync } from 'fastify';
import {userIdParam, createUserBody, userResponse} from '../schemas/userS';
import {getUserHandler, createUserHandler} from '../handlers/userH';
 
export const userRoute: FastifyPluginAsync = async (fastify, opts) => {

  fastify.get("/", async (request, reply,) => {
    return "from the user route file, we are ORGANIZED now baby 🔥";
  });

  fastify.get("/:id", {
      schema: {
        params: userIdParam, // ← validates :id is number only
        response: { 200: userResponse, // ← serializes response FAST + strips unknown fields
        }}}, getUserHandler);

  // POST /user ← full body validation
  fastify.post("/", {
      schema: {
        body: createUserBody,
        response: { 201: userResponse }}}, createUserHandler);
};