const mysql = require('mysql2');
const connection = mysql.createConnection({
  // connectionLimit: 10,
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'course_work_db_1'
});

module.exports = connection;