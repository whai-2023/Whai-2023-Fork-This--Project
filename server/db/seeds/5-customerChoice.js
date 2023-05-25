exports.seed = function (knex) {
    return knex('customerChoice').insert([
      { id: 1, 
        body_color_id: '', 
        base_color_id: '',
        total_price: '$'
      },
      { id: 2, 
        body_color_id: '', 
        base_color_id: '',
        total_price: '$'
      },
    ])
  }