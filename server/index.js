var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors()).use(express.json())
.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    let uname=req.body.uname;
    let pass=req.body.pass;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.send();
});

app.listen(2000);