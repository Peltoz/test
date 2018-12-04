var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'tjdnjs12!',
    database : 'nodetest'
});

connection.connect()

app.listen(3000, function(){
    console.log("Start at 3000!")
});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    console.log('test')
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req, res){
    console.log('test')
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', function(req, res){
    console.log(req.body.email)
    //res.send("<h1>Welcome ! " + req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})
})