// ←←← Add these named handlers at the top or bottom

export const getUserHandler = async  (request, reply) => {
  const { id } = request.params;
  // your db logic etc.
  return { id, name: "Brogrammer", email: "bro@legend.com", age: 33, createdAt: new Date().toISOString(), secretToken: "should-not-appear" };
};

export const createUserHandler = async (request, reply) => {
  const { name, email, age } = request.body; // 100% safe because validation passed
  // save to db etc.

  request.log.info({ body: request.body }, "Creating user"); // pino log with body

  reply.code(201);
  return { id: "69", name, email, age: age ?? 18, createdAt: new Date().toISOString()};
};