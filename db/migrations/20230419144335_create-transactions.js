"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
// oque ela vai fazer: criar uma tabela, remover uma tabela etc...
async function up(knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary();
        table.text('title').notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
}
exports.up = up;
// descreve algum error, se precisarmos voltar atras (metodo row bak)
async function down(knex) {
    await knex.schema.dropTable('transactions');
}
exports.down = down;