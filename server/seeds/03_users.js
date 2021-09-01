
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {group_id: 1, organization_id: 1, dodid: 1050259587, rank: 'CPT', grade: 'O-3', last_name: 'Wayne', first_name: 'Bruce', email: ''},
        {group_id: 2, organization_id: 1, dodid: 1212528282, rank: '1LT', grade: 'O-3', last_name: 'Grayson', first_name: 'Dick', email: ''},
        {group_id: 2, organization_id: 1, dodid: 1341526734, rank: '2LT', grade: 'O-3', last_name: 'Todd', first_name: 'Jason', email: ''},
        {group_id: 1, organization_id: 1, dodid: 83427990, rank: 'SFC', grade: 'E-7', last_name: 'Pennyworth', first_name: 'Alfred', email: ''},
        {group_id: 3, organization_id: 1, dodid: 9999999999, rank: 'CPT', grade: 'O-3', last_name: 'Bourne', first_name: 'Jason', email: ''}
      ]);
    });
};