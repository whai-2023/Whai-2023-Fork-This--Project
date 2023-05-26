exports.seed = function (knex) {
    return knex('base').insert([
      { id: 1, 
        base_color: 'Black', 
        base_type: 'Standard',
        image: './public/images/lavaLampBase/black.png',
        price: '$100'
      },
      { id: 2, 
        base_color: 'Black', 
        base_type: 'Rocket',
        image: './public/images/lavaLampBase/blackRocket.png',
        price: '$150'
      },
      { id: 3, 
        base_color: 'Red', 
        base_type: 'Standard',
        image: './public/images/lavaLampBase/red.png',
        price: '$120'
      },
      { id: 4, 
        base_color: 'Silver', 
        base_type: 'Standard',
        image: './public/images/lavaLampBase/silver.png',
        price: '$130'
      },
      { id: 5, 
        base_color: 'White', 
        base_type: 'Standard',
        image: './public/images/lavaLampBase/white.png',
        price: '$100'
      },
    ])
  }