const express = require('express');
const router = express.Router();
const userlogins = require('./userlogins')



class HandleAllUsersRoutes {
    
    static setRoutes() {
    
        router.get(`/help/`, (req,res)=>{
            new userlogins(req,res)
        });

        return router
    }
}

module.exports = HandleAllUsersRoutes;

