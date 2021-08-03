require('dotenv').config()

class AppConfigurations{


    appConfiguration() {

        const config = {
                appname: "Api",
                serverPortNumber: process.env.APISERVERPORT,
                pgadmin: {
                    user: process.env.DBSUSERNAME,
                    host: process.env.DBHOST,
                    database: process.env.DBNAME,
                    password: process.env.DBPASSWORD,
                    port: process.env.DBPORT,
                    dialect: "postgres",
                    ssl: {
                        rejectUnauthorized: false
                    }
                },
            };

            return JSON.stringify(config)
        }
}


module.exports = AppConfigurations;

