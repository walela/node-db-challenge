exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments()
      table
        .text('name')
        .notNullable()
        .unique()
      table.text('description')
      table.boolean('completed').defaultTo(false)
    })
    .createTable('resources', table => {
      table.increments()
      table
        .text('name')
        .notNullable()
        .unique()
      table.text('description')
    })
    .createTable('projects_resources', table => {
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      table
        .integer('resource_id').unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
      table.primary(['project_id', 'resource_id'])
    })
    .createTable('tasks', table => {
      table.increments()
      table.text('description').notNullable()
      table.text('notes')
      table.boolean('completed').defaultTo(false)
      table
        .integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
}
