const dateTime = require('../utils/datetime');
const connection = require('../utils/connection');

class UsersLogin extends dateTime {

    constructor(req,res) {
        super()
        this._req = req;
        this._res = res;
        this._setCoreImplementation()
    }

    async _setCoreImplementation(){

        const clientConnection = await connection.setPgConnection().connect()

        try{

            const query = `SELECT * FROM users`
            const {rowCount, rows} = await clientConnection.query(query,[]);
            console.log(rowCount, rows)
            
        }catch(err){
            console.log(err)
        }finally{
            clientConnection.release(true)
        }
    }

}

module.exports = UsersLogin