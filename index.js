const express  = require('express');
const app = express();
const bodyParser = require('body-parser')
const AppConfigurations = require('./utils/config')
const usersRoutes = require('./users/usersroutershandlers')


class Server {

    constructor() {
        this.setMiddleWare();
        this.setAllRoute();
        this.startServerInstance()
    }

    setMiddleWare() { 
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }

    setAllRoute() {
        app.use(usersRoutes.setRoutes())
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