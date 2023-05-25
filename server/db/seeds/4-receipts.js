exports.seed = function (knex) {
    return knex('receipts').insert([
      { receipt_number: 1, 
        product_id: 3, 
        customer_id: 4,
        product_price: '$500'
      },
      { receipt_number: 2, 
        product_id: 1, 
        customer_id: 2,
        product_price: '$800'
      },
      { receipt_number: 3, 
        product_id: 2, 
        customer_id: 1,
        product_price: '$850'
      },
      { receipt_number: 4, 
        product_id: 2, 
        customer_id: 3,
        product_price: '$850'
      },
    ])
  }