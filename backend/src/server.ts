// Backend API RESTful

import Fastify from 'fastify';

const app = Fastify();

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */

app.get('/hello', () => {
  return "Hello World!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running!');
  });
