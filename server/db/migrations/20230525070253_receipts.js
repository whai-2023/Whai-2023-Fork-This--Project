exports.up = (knex) => {
    return knex.schema.createTable('receipts', (table) => {
      table.increments('receipt_number').primary()
      table.number('product_id')
      table.number('buyer_id')
      table.string('price')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('receipts')
  }