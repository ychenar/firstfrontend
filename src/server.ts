// src/server.js
import app from "./app";

// process.env.PORT is always a string so we have to wrap it in a Number() function to make it a number.

const PORT = Number(process.env.PORT) || 5000;
const start = async () => {
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
