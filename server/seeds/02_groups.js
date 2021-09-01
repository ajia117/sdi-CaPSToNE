
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {organization_id: 1, name: 'HQ/Operations'},
        {organization_id: 1, name: '1st Platoon'},
        {organization_id: 1, name: '2st Platoon'}
      ]);
    });
};
