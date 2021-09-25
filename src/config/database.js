require('dotenv').config()

module.exports = {
    dialect: "mysql",
    username: "admin",
    password: "d05m0112",
    database: "my-test", 
    host: "my-test.cxrpnok6zqsx.us-east-1.rds.amazonaws.com",
    port: "3306",
    define:{
        timestamps: true,
        underscored: true
    }
}
