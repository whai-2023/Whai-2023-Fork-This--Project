exports.up = (knex) => {
    return knex.schema.createTable('receipts', (table) => {
      table.increments('receipt_number').primary()
      table.integer('customer_choice_id')
      table.integer('customer_id')
      table.string('product_price')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('receipts')
  }