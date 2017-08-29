var express  = require('express');
var bodyparser  = require('body-parser');
var pug = require('pug');
var moment = require('moment');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var app = express();

app.set("view engine","pug");
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})


app.use(morgan('combined', {stream: accessLogStream}))
app.use('/assets',express.static(__dirname+'/assets'));
app.use('/',bodyparser.urlencoded({extended:false}));

app.post('/submit',function (req,res) {
    var dob = req.body.DateofBirth;
    var now = Date.now();
    var days = moment.duration(now-Date.parse(dob)).asDays();
    res.render('subm',{sometitle:"Submit page",msg: "Hey " + req.body.FirstName + " you have lived on this planet for "+ days  +" days"});
});
app.get('/form',function (req,res) {
    res.render('form');
})
app.listen(3128,callback());
function callback() {
    console.log("Server Running");
    //res.end("Hello World!!!");
}
