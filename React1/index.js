const express=require('express');
const bodyParser=require('body-parser')
require('./conn');
const Student =require("./student.js");
const app=express();


app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


app.post('/persons',(req,res)=>{
    const { name, email } = req.body;
   
    const user=new Student({name,email});
    
    user.save().then((d)=>{
        console.log("done",d)
    }).catch((e)=>{console.log(e)});
    res.end();
})




app.listen(8080,()=>{console.log('connected')})



/*

 const user=new Student(req.body);
user.save().then(()=>{
    res.status(201);
    res.send(user);
}).catch((e)=>{
    res.status(400);
    res.send(e)});
})
 */



