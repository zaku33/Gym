const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
var config = require('./config')


app.listen(process.env.PORT || config.apiPort)

mongoose.connect(config.dbHost,{useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () =>{
console.log("Connection succeeded at port: " +config.apiPort);
});

// (app) is the const app , not app in controller
app.use('/',require('./routes/all.route'))

require('./seed/admin.seed')
