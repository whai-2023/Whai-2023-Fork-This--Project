exports.up = (knex) => {
    return knex.schema.createTable('products', (table) => {
      table.increments('id').primary()
      table.string('lava_color')
      table.string('base_color')
      table.string('price')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('products')
  }




