exports.seed = function (knex) {
    return knex('products').insert([
      { receipt_number: 1, 
        product_id: 3, 
        buyer_id: 4,
        price: '$500'
      },
      { receipt_number: 2, 
        product_id: 1, 
        buyer_id: 2,
        price: '$800'
      },
      { receipt_number: 3, 
        product_id: 2, 
        buyer_id: 1,
        price: '$850'
      },
      { receipt_number: 4, 
        product_id: 2, 
        buyer_id: 3,
        price: '$850'
      },
    ])
  }