const { toBeEnabled } = require("@testing-library/jest-dom/matchers");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('lamp_body', (table) => {
    table.increments('id')
    table.string('liquid_colour')
    table.string('wax_colour')
    table.binary('image')
    table.string('price')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('lamp_body')
};
