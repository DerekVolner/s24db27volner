var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rhinoRouter = require('./routes/rhino');
var gridRouter = require('./routes/grid')
var pickRandRouter = require('./routes/pick')

//router for part 4 - 8
var resourceRouter =require('./routes/resource')



var rhinoSchema = require("./models/rhinoSchema");
// We can seed the collection if needed on server start
//part 3-10
//need 3 instances for class
async function recreateDB(){
 // Delete everything
 await rhinoSchema.deleteMany();
 let instance1 = new 

rhinoSchema({rhino_species:"White Rhino", rhino_age:16, 
endagerment_status: "Near Threatened"});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });

 let instance2=new 
 rhinoSchema({rhino_species:"Greater One-horned Rhino", rhino_age:6, 
endagerment_status: "Vulnerable"});
 instance2.save().then(doc=>{
 console.log("Second object saved")}
 ).catch(err=>{
 console.error(err)
 });

 let instance3 = new
 rhinoSchema({rhino_species:"Black Rhino", rhino_age:9, 
endagerment_status: "Critically Endangered"});
 instance3.save().then(doc=>{
 console.log("Third object saved")}
 ).catch(err=>{
 console.error(err)
 });

}
let reseed = true;
if (reseed) {recreateDB();}

//end of part 3-10




var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//part 3-assignment 11
//connectionString should be the connection string we obtained while creating our database for ATLAS

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose=require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rhino', rhinoRouter);
app.use('/grid', gridRouter);
app.use('/pick',pickRandRouter)

//part 4-9 app use
app.use('/resource',resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});



module.exports = app;

