exports.seed = function (knex) {
    return knex('products').insert([
      { id: 1, 
        lava_color: 'blue', 
        base_color: 'gold',
        price: '$800'
      },
      { id: 2, 
        lava_color: 'red', 
        base_color: 'gold',
        price: '$850'
      },
      { id: 3, 
        lava_color: 'blue', 
        base_color: 'silver',
        price: '$500'
      },
    ])
  }