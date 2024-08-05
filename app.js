const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
 var items=[];
var eg="Revision"
app.get("/",function(req,res){
    res.render('todoList',{ejes:items});
});

app.post("/",function(req,res){
    // console.log(req.body.task);
    var item=req.body.task; 
    items.push(item);
    res.redirect("/");
});




app.listen(8000,function(){
    console.log("Server is running...");
});