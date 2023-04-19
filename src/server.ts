import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

// primeiro o nome da rota
// segundo é uma função que devolve uma resposts
app.get('/hello', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
