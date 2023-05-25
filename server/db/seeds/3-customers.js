exports.seed = function (knex) {
    return knex('customers').insert([
      { id: 1, 
        name: 'Jen', 
        location: 'South',
        adjective: 'Bubbly'
      },
      { id: 2, 
        name: 'Ben', 
        location: 'East',
        adjective: 'Foodie'
      },
      { id: 3, 
        name: 'Michael', 
        location: 'West',
        adjective: 'Classic'
      },
      { id: 4, 
        name: 'Martin', 
        location: 'North',
        adjective: 'Strange'
      },
    ])
  }