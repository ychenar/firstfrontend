// src/routes/user.js
import {userIdParam, createUserBody, userResponse} from '../schemas/userS.js';
import {getUserHandler, createUserHandler} from '../handlers/userH.js';
 
export default async function userRoutes(fastify, opts) {

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
}
