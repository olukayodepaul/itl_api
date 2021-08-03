
const appConfigurations = require('./config')
const setAppConfiguration = JSON.parse(new appConfigurations().appConfiguration())
const Pool = require('pg').Pool;


//Conection class
class Connection{


    static setPgConnection() {
        const pool = new Pool(setAppConfiguration.pgadmin);
        return pool;
    } 

    static setMongoDbConnection(){

    }

    static setRedisConnection(){

    }

    static setMysqlConnection(){

    }
    
}

module.exports = Connection;
