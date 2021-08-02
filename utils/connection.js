
const appConfigurations = require('./config')
const setAppConfiguration = JSON.parse(new appConfigurations().appConfiguration())
const Pool = require('pg').Pool;


class Connection{

    static setPgConnection() {
        const pool = new Pool(setAppConfiguration.pgadmin);
        return pool;
    } 
    
}

module.exports = Connection;
