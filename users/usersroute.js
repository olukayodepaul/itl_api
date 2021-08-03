const express = require('express');
const router = express.Router();
const userlogins = require('./userlogins')



class HandleAllUsersRoutes {
    
    static setRoutes() {

        const baseUrl = "/api/users"
    
        router.get(`${baseUrl}/login/`, (req,res)=>{
            new userlogins(req,res)
        });

        return router
    }
}

module.exports = HandleAllUsersRoutes;

