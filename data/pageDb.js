const mysql = require("mysql2");
const config = require("../config");
const pool = mysql.createPool(config.db);

let db = {};


module.exports = db