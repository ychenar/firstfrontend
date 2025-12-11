// src/schemas/contactS.js
export const contactS = {
  type: 'object',
  required: ['subject', 'message'],
  properties: {
    subject:{type: 'string', minLength: 3},
    message:{type:'string',minLength: 10}
  }
};