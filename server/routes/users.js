const express = require('express')

const db = require('../db/db')

const router = express.Router()

// Home Page
router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('index', { users: users })
  } catch (err) {
    res.send('DATABASE ERROR: ' + 'Home Route Problem')
  }
})

// Customize Page

router.get('/customize', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('customize', { users: users })
  } catch (err) {
    res.send('DATABASE ERROR: ' + 'Customize Route Problem')
  }
})

// Checkout Page

router.get('/checkout', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('checkout', { users: users })
  } catch (err) {
    res.send('DATABASE ERROR: ' + 'Checkout Route Problem')
  }
})

module.exports = router
