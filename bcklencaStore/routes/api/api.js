//rutas -> router -> app: express

//rutas -> router:entidad -> router:api -> app:express


var express = require('express');
var router = express.Router();

//http://localhost:3000/api/version
router.get('/version', function(req,res){
res.status(200).json({"version":"API v1.0"});
});
router.get('/yo', function(req,res){
    res.status(200).json({"yo":" 0318199501242", "Nombre":"Luis Inestroza"});
    });
    




module.exports =router;













/*
var mensaje ="Hola Mundo";
var libLencaFunctions={};//JSON Javascript object Notation


libLencaFunctions.mensaje="Hola mundo";
libLencaFunctions.version="v1.0";
libLencaFunctions.sayhello= ()=>{
    console.log("Hello");
}// ES6
module.exports=libLencaFunctions;
*/