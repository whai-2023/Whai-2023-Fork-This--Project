exports.up = (knex) => {
    return knex.schema.createTable('base', (table) => {
      table.increments('id').primary()
      table.string('base_color')
      table.string('base_type')
      table.binary('image')
      table.string('price')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('base')
  }