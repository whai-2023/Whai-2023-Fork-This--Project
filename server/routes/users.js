const express = require('express')

const db = require('../db/db')

const router = express.Router()

// Home Page
router.get('/', async (req, res) => {
  try {
    const customers = await db.getCustomers()
    res.render('index', { customers: customers })
  } catch (err) {
    res.send('DATABASE ERROR: ' + 'Home Route Problem')
  }
})

// Customize Page

router.get('/customize', async (req, res) => {
  try {
    const lavaColors = await db.getLavaColors()
    const baseColors = await db.getBaseColors()
    const bodyPrice = (lavaColors[0].price)
    const basePrice = (baseColors[0].price) 
    const totalPrice = db.calculateTotalPrice(bodyPrice, basePrice)
    res.render('customize', { body: lavaColors, base: baseColors, totalPrice: totalPrice })
  } catch (err) {
    res.send('DATABASE ERROR: ' + 'Customize Route Problem');
  }
})

// Checkout Page

router.get('/checkout', async (req, res) => {
  try {
    const receipts = await db.getReceipts()
    res.render('checkout', { receipts: receipts })
  } catch (err) {
    res.send('DATABASE ERROR: ' + 'Checkout Route Problem')
  }
})

module.exports = router
