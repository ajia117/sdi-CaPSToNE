
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sub_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('sub_categories').insert([
        {category_id: 1, title: 'Cyber Awareness Challange'},
        {category_id: 1, title: 'Anti-Terrorism Level 1'},
        {category_id: 1, title: 'Operational Security'},
        {category_id: 2, title: 'M4'}
      ]);
    });
};
