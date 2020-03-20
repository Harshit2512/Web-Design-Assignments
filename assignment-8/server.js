let express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

    //mongoose.connect("mongodb+srv://admin:admin@cluster0-rqgvr.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }).then(() => console.log('connected to DB'))
 //mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/local', {
   useMongoClient: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Server running on port : ' + port);