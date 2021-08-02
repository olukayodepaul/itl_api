const express = require('express');
const router = express.Router();


class HandleAllUsersRoutes {


    static routes() {
    
        router.get(`/help/`, (req,res)=>{
            console.log({})
        });

    }

}

module.exports = HandleAllUsersRoutes;