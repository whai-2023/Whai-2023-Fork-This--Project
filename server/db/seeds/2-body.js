

exports.seed = function (knex) {
  return knex('body').insert([
    { id: 1, 
      liquid_color: 'blue', 
      wax_type: 'green',
      image: '../../public/images/lavaLampBody/blueGreen.png',
      price: '$50'
    },
    { id: 2, 
      liquid_color: 'purple gradient', 
      wax_type: 'white',
      image: '../../public/images/lavaLampBody/gradientPurpleBlue.png',
      price: '$75'
    },
    { id: 3, 
      liquid_color: 'yellow gradient', 
      wax_type: 'white',
      image: '../../public/images/lavaLampBody/gradientYellowRed.png',
      price: '$75'
    },
    { id: 4, 
      liquid_color: 'green', 
      wax_type: 'black',
      image: '../../public/images/lavaLampBody/greenBlack.png',
      price: '$50'
    },
    { id: 5, 
      liquid_color: 'pink', 
      wax_type: 'purple',
      image: '../../public/images/lavaLampBody/pinkPurple.png',
      price: '$50'
    },
    { id: 6, 
      liquid_color: 'purple', 
      wax_type: 'green',
      image: '../../public/images/lavaLampBody/purpleGreen.png',
      price: '$50'
    },
    { id: 7, 
      liquid_color: 'purple', 
      wax_type: 'orange',
      image: '../../public/images/lavaLampBody/purpleOrange.png',
      price: '$50'
    },
    { id: 8, 
      liquid_color: 'red', 
      wax_type: 'purple',
      image: '../../public/images/lavaLampBody/redPurple.png',
      price: '$50'
    },
    { id: 9, 
      liquid_color: 'silver', 
      wax_type: 'glitter',
      image: '../../public/images/lavaLampBody/silverGlitter.png',
      price: '$100'
    },
    { id: 10, 
      liquid_color: 'yellow', 
      wax_type: 'orange',
      image: '../../public/images/lavaLampBody/yellowOrange.png',
      price: '$50'
    },
  ])
}