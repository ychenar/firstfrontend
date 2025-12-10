// src/schemas/userS.js
export const userIdParam = {
  type: "object",
  required: ["id"],
  properties: {
    id: { type: "string", pattern: "^[0-9]+$" }, // only numbers, you could use uuid etc.
  },
};

export const createUserBody = {
  type: "object",
  required: ["name", "email"],
  properties: {
    name: { type: "string", minLength: 2 },
    email: { type: "string", format: "email" },
    age: { type: "integer", minimum: 0, maximum: 120, default: 18 },
  },
  additionalProperties: false, // ← this blocks unknown fields (security win)
};

export const userResponse = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    email: { type: "string" },
    age: { type: "integer" },
    createdAt: { type: "string", format: "date-time" },
  },
};
