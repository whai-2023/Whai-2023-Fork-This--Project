exports.seed = function (knex) {
    return knex('receipts').insert([
      { receipt_number: 1, 
        customer_choice_id: 1, 
        customer_id: 4,
        product_price: '$500'
      },
      { receipt_number: 2, 
        customer_choice_id: 2, 
        customer_id: 2,
        product_price: '$800'
      },
    ])
  }