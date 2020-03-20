// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after connection to sqlite
        conn.run('PRAGMA foreign_keys = ON', done) // turn on foreign key enforcement
      }
    }
  }
}
