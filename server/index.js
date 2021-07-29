var express = require('express');
var app = express();
const cors = require('cors');

//mysql block
// get the client
const mysql = require('mysql2');
 
// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'system',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


app.use(cors()).use(express.json())
.use(express.urlencoded({ extended: true }));

app.post('/login/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    let uname=req.body.uname;
    pool.query("SELECT pass FROM login WHERE uname='"+uname+"'" , 
        function(err, rows, fields) {
            if (rows[0].pass==req.body.pass){
                res.send();
            }
            else{
                console.log(rows[0].pass,rows)
            }
        }
    )
});


app.post('/getdata/', function(req, res){
    res.header('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    var test=[]
    pool.query("SELECT Id,uname,AccessLevel FROM login", function(err, rows, fields) {
        // Connection is automatically released when query resolves
        console.log(rows);
        rows.forEach(element => {
            test.push({id:element.Id,uname:element.uname,accessLevel:element.AccessLevel})
        });
        console.log(test);
        res.send(test)
    })
});
app.listen(2000);