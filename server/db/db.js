const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  getReceipts,
  getCustomers,
  getLavaColors,
  getBaseColors,
  calculateTotalPrice,
  getCustomizedProducts,
  //getUsers: getUsers,
}

// function getUsers(db = connection) {
//   return db('users').select()
// }

// function getUser(id, db = connection) {
//   return db('users').where('id', id).first()
// }

function getReceipts() {
  return db('receipts').select()
}

// function getProducts() {
//   return db('base').select()
// }

function getCustomers() {
  return db('customers').select()
}

function getLavaColors() {
  return db('body').select()
}

function getBaseColors() {
  return db('base').select()
}

function calculateTotalPrice(bodyPrice, basePrice) {
  const total = parseInt(bodyPrice) + parseInt(basePrice)
  return `$${total}`
}

function getCustomizedProducts() {
  return db('customerChoice as cc')
    .join('body as b', 'cc.body_color_id', 'b.id')
    .join('base as bs', 'cc.base_color_id', 'bs.id')
    .select(
      'cc.id',
      'b.liquid_color',
      'b.price as body_price',
      'b.image_path as body_image',
      'bs.base_color',
      'bs.price as base_price',
      'bs.image_path as base_image'
    )
    .map((product) => ({
      ...product,
      total_price: calculateTotalPrice(
        parseInt(product.body_price),
        parseInt(product.base_price)
      ),
    }))
}