const express  = require('express');
const app = express();
const bodyParser = require('body-parser')
const AppConfigurations = require('./utils/config')
const usersRouters = require('./users/usersroutershandlers').processes()


class Server {

    constructor() {
        this.setRouteAndMiddleWare();
        this.startServer();
    }

    setRouteAndMiddleWare() { 
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(usersRouters);
    }

    startServer() {
        const setAppConfiguration = JSON.parse(new AppConfigurations().config())
        const port = setAppConfiguration.serverPortNumber.port
        app.listen(port ,()=>{
            console.log(`listening on port 9100 ${port}`)
        })
    }
}

new Server()
