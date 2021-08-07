const express = require('express');
const router = express.Router();
const userlogins = require('./userlogins');
const usermodule = require('./usermodule');



class HandleAllUsersRoutes {
    
    static setRoutes() {

        const baseUrl = "/api/users";
    
        router.get(`${baseUrl}/login/`, (req,res)=>{
            new userlogins(req,res);
        });

        router.get(`${baseUrl}/modules/`, (req,res)=>{
            new usermodule(req,res);
        });

        router.post(`${baseUrl}/task/`, (req,res)=>{
            new usermodule(req,res);
        });

        return router;
    }

}

module.exports = HandleAllUsersRoutes;

