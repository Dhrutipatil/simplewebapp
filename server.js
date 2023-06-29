var exp=require('express');
var app=exp();
app.get("/getform",function(req,res){
    res.sendFile("hello from server 9000");
})
app.listen(9000,function(){
    console.log("server 9000 started");
})