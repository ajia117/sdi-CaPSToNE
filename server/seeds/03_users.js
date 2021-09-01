
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {group_id: 1, organization_id: 1, dodid: 1050259587, last_name: 'Wayne', first_name: 'Bruce'},
        {group_id: 2, organization_id: 1, dodid: 1212528282, last_name: 'Grayson', first_name: 'Dick'},
        {group_id: 2, organization_id: 1, dodid: 1341526734, last_name: 'Todd', first_name: 'Jason'},
        {group_id: 1, organization_id: 1, dodid: 83427990, last_name: 'Pennyworth', first_name: 'Alfred'},
        {group_id: 3, organization_id: 1, dodid: 9999999999, last_name: 'Bourne', first_name: 'Jason'}
      ]);
    });
};