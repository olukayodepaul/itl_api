const express = require('express');
const router = express.Router();


class HandleAllUsersRoutes {


    static setRoutes() {
    
        router.get(`/help/`, (req,res)=>{
            res.send({})
        });

        return router
    }
}

module.exports = HandleAllUsersRoutes;