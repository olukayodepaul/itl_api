class responseHandler{ 

    static responseHandlers(status,res,data) {
        
        res.writeHeader(status,{
            'Content-Type':'application/json' 
        });
        
        if(data) res.write(JSON.stringify(data));
        res.end();     
    }
}

module.exports = responseHandler;