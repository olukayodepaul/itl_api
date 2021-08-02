const express  = require('express');
const app = express();
const bodyParser = require('body-parser')
const appConfigurations = require('./utils/config')
const usersRoutes = require('./users/usersroute')


class Server {

    constructor() {
        this.setMiddleWare();
        this.setAllRoute();
        this.startServerInstance();
    }

    setMiddleWare() { 
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }

    setAllRoute() {
        app.use(usersRoutes.setRoutes())
    }

    startServerInstance() {
        const setAppConfiguration = JSON.parse(new appConfigurations().appConfiguration())
        const port = setAppConfiguration.serverPortNumber.port
        app.listen(port ,()=>{
            console.log(`listening on port 9300 ${port}`)
        })
    }
}

new Server()