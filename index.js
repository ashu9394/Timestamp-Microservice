var express = require('express')
var time = require('./time.js')
var app = express()


app.use('/',express.static(__dirname+'/public'))

app.get('/:dateString',function(req,res){
    res.json(time(req.param.dateString))
})

app.listen(8080)