exports.up = (knex) => {
    return knex.schema.createTable('customers', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('location')
      table.string('adjective')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('cutomers')
  }