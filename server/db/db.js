const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  getReceipts,
  getProducts,
  getCustomers,
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

function getProducts() {
  return db('base').select()
}

function getCustomers() {
  return db('customers').select()
}