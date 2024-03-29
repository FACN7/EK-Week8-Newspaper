const fs = require("fs");
const path = require("path");

const dbConnection = require("./db_connection.js");

const sqlPath = path.join(__dirname, "db_build.sql");
const sql = fs.readFileSync(sqlPath).toString();
const runDbBuild = cb => dbConnection.query(sql, cb)

module.exports 
// = ()=>{
// dbConnection.query(sql, (err, result) => {
//   if (err) {
//     throw new Error("We have an error:", err);
//   } else {
//     console.log("database created");
//     dbConnection.end(() => {
//       console.log("connection closed");
//     });
//   }
// });
// }
module.exports =runDbBuild;