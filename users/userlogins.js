const datetime = require('../utils/datetime');
const response = require('../utils/responsehandler');
const connection = require('../utils/connection').setPgConnection();
const pgsqlquery = JSON.parse(require('./userqueryhandler').getQueryHandler())



class UsersLogin extends datetime {

    constructor(req,res) {
        super()
        this.req = req.query;
        this.res = res;
        this._setCoreImplementation()
    }

    async _setCoreImplementation() {

        const connect = await connection.connect()

        try{

            const{username, password} = this.req
            const setLoginParameter = [username, password]
            const {rowCount, rows} = await connect.query(pgsqlquery.validateUsers,setLoginParameter);
            let setResponce;

            if(rowCount>0) {

                setResponce = {
                    status:200,
                    message: "Succesful",
                    data: rows[0]
                }
    
            }else{
                
                setResponce = {
                    status:400,
                    message: "Invalid Username and Password",
                    data: ""
                }
            }

            response.responseHandlers(200, this.res,setResponce);

        }catch(err){
            console.log(err)
        }finally{
            connect.release(true)
        }
    }
}

module.exports = UsersLogin






