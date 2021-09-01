
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trackers').del()
    .then(function () {
      // Inserts seed entries
      return knex('trackers').insert([
        {categories: 1, sub_categories: 1, comments: null, due_date: '2021-12-25', next_date: '2022-12-25'},
        {categories: 1, sub_categories: 2, comments: null, due_date: '2021-12-25', next_date: '2022-12-25'},
        {categories: 1, sub_categories: 3, comments: null, due_date: '2021-12-25', next_date: '2022-12-25'}
      ]);
    });
};
