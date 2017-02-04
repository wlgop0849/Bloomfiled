var express = require("express")
var path = require("path");
var open = require("open");
var webpack = require("webpack");
var config = require("../webpack.config.dev.js");

var port = 3000;
var app = express();
var complier = webpack(config);

//webpack
//app.use(require('webpack-dev-middleware')(compiler,{noInfo:true, publicPath: config.output.publicPath}));

//handle this way
app.get("/",function(req,res){res.sendFile(path.join(__dirname,"../src/index.html"));})

//go listen the port
app.listen(port,function(err){
    if(err){console.log(err);}
    else{open("http://localhost:"+port);}
})

