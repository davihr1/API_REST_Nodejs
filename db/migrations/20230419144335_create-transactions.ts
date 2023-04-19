import { Knex } from 'knex'

// oque ela vai fazer: criar uma tabela, remover uma tabela etc...
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// descreve algum error, se precisarmos voltar atras (metodo row bak)
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
