require('dotenv').config()

class AppConfigurations{

    constructor() {
    }

    config() {

        const config = {
                appname: "Api",
                serverPortNumber: {
                    port: process.env.APIPORT || 9300
                }
            };

            return JSON.stringify(config)
        }
}


module.exports = AppConfigurations;

