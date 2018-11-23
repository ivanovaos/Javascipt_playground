const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8081;

app.use(cors());
app.use(bodyParser.json());

//app my routes will come later

app.use(function(req, res, next){
    let err = new Error("Not found");
    err.status = 404;
    next(err);
})

app.listen(port, function(){
    console.log("Server is starting on port" + port);
});