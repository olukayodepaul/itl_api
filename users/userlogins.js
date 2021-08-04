const dateTime = require('../utils/datetime');
const connection = require('../utils/connection');
const response = require('../utils/responsehandler');


class UsersLogin extends dateTime {

    constructor(req,res) {
        super()
        this.req = req.query;
        this.res = res;
        this._setCoreImplementation()
    }

    async _setCoreImplementation() {

        const connect = await connection.setPgConnection().connect()

        try{

            const query = `SELECT * FROM users`
            const {rowCount, rows} = await connect.query(query,[]);
            response.responseHandlers(200, this.res,rows);
            
        }catch(err){
            console.log(err)
        }finally{
            connect.release(true)
        }
    }
}

module.exports = UsersLogin






