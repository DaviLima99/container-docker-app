
module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host: 'mysql-container',
        database: 'appdatabase',
        user:     'root',
        password: '123456789'
      },
      migrations: {
        directory: './src/database/migrations',
      },
    },
  
    test: {
      client: 'test',
      connection: {
        host: 'mysql-container',
        database: 'appdatabase',
        user:     'root',
        password: '123456789'
      },
      migrations: {
        directory: './src/database/migrations',
      },
    },
  
    staging: {
      client: 'mysql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'mysql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };