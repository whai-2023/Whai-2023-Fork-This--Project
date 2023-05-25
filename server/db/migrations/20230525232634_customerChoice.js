exports.up = (knex) => {
    return knex.schema.createTable('customerChoice', (table) => {
      table.increments('id').primary()
      table.string('body_color_id')
      table.string('base_color_id')
      table.string('total_price')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('customerChoice')
  }