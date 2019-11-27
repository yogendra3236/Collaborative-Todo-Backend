// const fs = require('fs');
const config = process.env;

module.exports = {
    development: {
        username: 'root',
        password: 'undefined',
        database: 'todopro',
        host: 'localhost',
        dialect: 'mysql'
    },
    test: {
        username: config.DB_ME,
        password: config.DB_PASS,
        database: config.DB_NAME,
        host: config.DB_HOST,
        dialect: config.DIALECT
    },
    production: {
        username: config.DB_ME,
        password: config.DB_PASS,
        database: config.DB_NAME,
        host: config.DB_HOST,
        dialect: config.DIALECT
        // dialectOptions: {
        //   ssl: {
        //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
        //   }
        // }
    }
};
