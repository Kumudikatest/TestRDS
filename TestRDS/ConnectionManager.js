module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["KTestDB"] = {
            host: process.env.EndPoint_rdsKTestDB,
            port: process.env.Port_rdsKTestDB,
            user: process.env.User_rdsKTestDB,
            password: process.env.Password_rdsKTestDB,
            database: "KTest",
        };
    };



















    