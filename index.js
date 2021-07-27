const express  = require('express');
const app = express();
const bodyParser = require('body-parser')


class Server {

    constructor() {
        //this.instantiateMondbDatabaseConnection()
        this.setRouteAndMiddleWare();
        this.startServer();
    }

    // instantiateMondbDatabaseConnection() {
    //    mongoDbConnection.applyConnection()
    // }

    setRouteAndMiddleWare() { 
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        //app.use(usersRouters)
        //app.use(customerRouters)
    }

    startServer() {
        const declearConfig = JSON.parse(new Config().config())
        const port = declearConfig.serverinstanceport.port
        app.listen(port ,()=>{
            console.log(`listening on port 9100 ${port}`)
        })
    }
}

new Server()
