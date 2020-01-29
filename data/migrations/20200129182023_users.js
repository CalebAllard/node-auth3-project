
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments();
    tbl.text('username',225)
        .notNullable();
    tbl.text('password')
        .notNullable();
    tbl.text('department');
  });
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExisits('users');
};
