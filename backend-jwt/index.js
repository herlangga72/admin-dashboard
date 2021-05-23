// Ini Pakai Node JS
// lebih simple mungkin???                                    

const setting = require('dotenv');
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const helmet = require('helmet');

// activate dotenv
setting.config();
// application setting
const app = express()
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(cors())
.use(helmet())
//create database connection
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN, { expiresIn: '1800s' });
}

function authenticateJWT (req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.TOKEN, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
}

//create connection 
conn.connect((err) =>{
  if(err) throw err; 
  console.log('Mysql Connected...');
});

//pseudo login need user and password control
app.post('/auth/login', ( req , res ) => {
  res.setHeader('Content-Type', 'application/json');
  res.setheader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader('Set-Cookie', 'foo=bar; HttpOnly');
  console.log('Cookies: ', req.cookies)
  let username = req.body.username;
  let password = req.body.password;
  let sql = 'SELECT username,password FROM `pd`.`login` WHERE username="'+username+'"';
  let query = conn.query(sql, (err, results) => {
    // console.log(results,username)
    console.log('Cookies: ', req.cookies)
    //bcrypt.compare(password, results[0]['password'], function(err, result) {
      res.header('Set-Cookie', 'token='+generateAccessToken({ username: req.body.username })+'; HttpOnly');
      // res.cookie('token', 'xxx-xxx-xxx', { maxAge: 86400000, httpOnly: true, domain: 'localhost:3000' })
       res.cookie(generateAccessToken({ username: req.body.username }));
      res.sendStatus(200) 
    });
  })
// })
//pseudo middleware jwt
app.get('/books', authenticateJWT, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.end('what');
})


// true code
// Hutang Client
 app.get('/api/hutang/:client_id',(req, res) => { 
  let sql = 'CALL hut_client(STR_TO_DATE("'+req.query.date_start+'","%d/%m/%Y"),STR_TO_DATE("'+req.query.date_end+'","%d/%m/%Y"),"'+req.params.client_id+'")';
  console.log(sql);
  let query = conn.query(sql, (err, results) => {
    // res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    if(err) {
      res.end(JSON.stringify({"status": 401, "error": "Data not found", "response": results}))  
    }
    else{
      res.end(JSON.stringify(results[0]));
    };
  });
});
// hutang plant
app.get('/api/hutang/:client_id/:plant_id',(req, res) => {
  let sql = 'CALL hut_plant(STR_TO_DATE("'+req.query.date_start+'","%d/%m/%Y"),STR_TO_DATE("'+req.query.date_end+'","%d/%m/%Y"),"'+ req.params.client_id +'","'+ req.params.plant_id +'")';
  // console.log(sql  '18/02/2020');
  let query = conn.query(sql, (err, results) => {
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    if(err) {
      console.log(sql);
      console.log(results);
      res.send(JSON.stringify({"status": 401, "error": "Data not found", "response": results}))  
    }
    else{
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    };
  });
});

//Server listening
app.listen(process.env.PORT,() =>{
  console.log('Server started on port '+process.env.PORT+' ...');
});