const express  = require('express');
const app = express();
const bodyParser = require('body-parser')
const AppConfigurations = require('./utils/config')
const usersRoutes = require('./users/usersroutershandlers')


class Server {

    constructor() {
        this.setRouteAndMiddleWare();
        this.startServer();
        thios.setRoute()
    }

    setMiddleWare() { 
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }

    setRoute() {
        app.use(usersRoutes.routes())
    }

    startServerInstance() {
        const setAppConfiguration = JSON.parse(new AppConfigurations().config())
        const port = setAppConfiguration.serverPortNumber.port
        app.listen(port ,()=>{
            console.log(`listening on port 9100 ${port}`)
        })
    }
}

new Server()