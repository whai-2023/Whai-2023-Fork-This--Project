exports.up = (knex) => {
    return knex.schema.createTable('receipts', (table) => {
      table.increments('receipt_number').primary()
      table.integer('product_id').references('products.id')
      table.integer('customer_id').references('customers.id')
      table.string('product_price')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('receipts')
  }