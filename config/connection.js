// Set up MYSQL connection
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ewl5t46614q8cq4t",
    password: "v87k60mzhtwhg6z9",
    database: "p285te4uyqtnbmwb"
  });
}

// Make connection
connection.connect(function (err) {
  if (err) {
    console.log("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});
// Export connection
module.exports = connection;
