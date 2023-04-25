import { expect, test } from 'vitest'

test('criar uma nova transação', () => {
  // Fazer a chamada HTTP p/ criar uma nova transação

  // Validação

  const respondeStatusCode = 201

  expect(respondeStatusCode).toEqual(201)
})
