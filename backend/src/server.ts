// Backend API RESTful

import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'b',
      }
    },
  });

  const user = await prisma.user.findMany({
    where: {
      name: {
        startsWith: 'a',
      }
    },
  });
  return ([habits, user]);
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running!');
  });
