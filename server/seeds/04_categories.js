
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {title: '350-1 Training'},
        {title: 'Weapons Qualification'},
        {title: 'ACFT'}
      ]);
    });
};
