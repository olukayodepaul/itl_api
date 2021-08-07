const connection = require('../utils/connection').setPgConnection();
const pgsqlquery = JSON.parse(require('./userqueryhandler').getQueryHandler())
const response = require('../utils/responsehandler');

class UserModules{

    constructor(req,res) {
        this.req = req.query;
        this.res = res;
        this._setCoreImplementation()
    }

    async _setCoreImplementation() {

        const connect = await connection.connect()

        try{

            const{user_id} = this.req
            const setModulParameter = [user_id]
            const {rowCount, rows} = await connect.query(pgsqlquery.getUserModule,setModulParameter);
            let setResponce;

            if(rowCount>0) {

                setResponce = {
                    status:200,
                    message: "Succesful",
                    data: rows
                }
    
            }else{
                
                setResponce = {
                    status:400,
                    message: "No module assigned to you",
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

module.exports = UserModules