const dateTime = require('../utils/datetime');
const connection = require('../utils/connection');
const responsefromserverrequest = require('../utils/responsehandler');


class UsersLogin extends dateTime {

    constructor(req,res) {
        super()
        this.req = req.query;
        this.res = res;
        this._setCoreImplementation()
    }

    async _setCoreImplementation() {

        const clientConnection = await connection.setPgConnection().connect()

        try{
            const query = `SELECT * FROM users`
            const {rowCount, rows} = await clientConnection.query(query,[]);
            responsefromserverrequest.responseHandlers(200, this.res, JSON.stringify(rows));
            
        }catch(err){
            console.log(err)
        }finally{
            clientConnection.release(true)
        }
        
    }

}

module.exports = UsersLogin