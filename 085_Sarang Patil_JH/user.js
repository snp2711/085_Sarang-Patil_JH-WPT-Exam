const mysql = require("mysql");
var Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host="locahost",
    user: "root",
    password: "cdac",
    database: "react",


};

const ConnectionCheck = async () => {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    console.log("connection ok..");
    await Connection.endAsync();
}

const addmsg = async (data) => {

    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();


    let addquery = `insert into massage values(?)`;
    await connection.queryAsync(addqury, [data.chats]);
    console.log("masg send");

    await connection.endAsync();

};