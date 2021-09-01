
exports.up = function(knex) {
  return knex.schema
  .createTable('organizations', function (table) {
    table.increments('id');
    table.string('name').notNullable();

  })
  .createTable('groups', function (table) {
    table.increments('id');
    table.integer('organization_id').notNullable();
    table.string('name').notNullable();
    table.foreign('organization_id').references('id').inTable('organizations');
  })
  .createTable('users', function (table) {
    table.increments('id');
    table.integer('group_id');
    table.integer('organization_id').notNullable();
    table.bigInteger('dodid').notNullable();
    table.string('rank');
    table.string('grade');
    table.string('last_name');
    table.string('first_name');
    table.string('email');
    table.foreign('group_id').references('id').inTable('groups');
    table.foreign('organization_id').references('id').inTable('organizations');
  })
  .createTable('categories', (table) => {
    table.increments('id');
    table.string('title').notNullable();
  })
  .createTable('sub_categories', function (table) {
    table.increments('id');
    table.integer('category_id');
    table.string('title').notNullable();
    table.foreign('category_id').references('id').inTable('categories');
  })
  .createTable('trackers', function (table) {
    table.increments('id');
    table.integer('categories').notNullable();
    table.integer('sub_categories');
    table.string('comments');
    table.date('due_date');
    table.date('next_date');
    table.foreign('categories').references('id').inTable('categories');
    table.foreign('sub_categories').references('id').inTable('sub_categories');
  })
  .createTable('trackers_users', function (table){
    table.integer('user_id');
    table.integer('tracker_id');
    table.string('file_path');
    table.boolean('is_complete');
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('tracker_id').references('id').inTable('trackers');
  })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('trackers_users')
    .dropTable('trackers')
    .dropTable('sub_categories')
    .dropTable('categories')
    .dropTable('users')
    .dropTable('groups')
    .dropTable('organizations');
};
