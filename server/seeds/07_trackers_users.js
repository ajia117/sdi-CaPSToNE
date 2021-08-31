
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trackers_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('trackers_users').insert([
        {user_id: 1, tracker_id: 1, file_path: null, is_complete: true},
        {user_id: 2, tracker_id: 1, file_path: null, is_complete: true},
        {user_id: 3, tracker_id: 1, file_path: null, is_complete: true},
        {user_id: 4, tracker_id: 1, file_path: null, is_complete: false},
        {user_id: 5, tracker_id: 1, file_path: null, is_complete: false},
        {user_id: 1, tracker_id: 2, file_path: null, is_complete: false},
        {user_id: 4, tracker_id: 2, file_path: null, is_complete: true},
        {user_id: 5, tracker_id: 2, file_path: null, is_complete: false},
        {user_id: 5, tracker_id: 3, file_path: null, is_complete: true}
      ]);
    });
};
