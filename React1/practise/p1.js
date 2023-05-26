const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/db',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(console.log('connected db'));

const Student=new mongoose.Schema(
    {
        name:{type :String},
        comment:{type :String}
    }
)
const User=new mongoose.model('collect',Student);


app.post('/api/post', async(req,res)=>{

const name=req.body.a;
const comment=req.body.b;
const obj=new User({name,comment});

await obj.save().then((r)=>{console.log(r);
});

res.end();
});




app.get('/api/get',async (req, res) => {
    try{
        const data=await User.find();
        res.send(data);
    }catch(e){
        res.send(e);
    }

  });

 
app.put('/api/update',async(req,res)=>{    
  const _id=req.body.id;
  const name=req.body.c;
  console.log(_id,name);

  try{
    const result=await User.updateOne({_id},{$set:{name:name}})
    console.log(result);
    }catch(err){console.log(err)}
}  )



app.delete('/api/del/:ida',async(req,res)=>{
  const idd =req.params.ida;
  console.log(idd);
  try{
    const result=await User.findByIdAndDelete(idd);;
    console.log(result);
    
    }catch(err){
      console.log(err);
    }
 
})





app.get('/',(req,res)=>{
    res.send('hi')
})


app.listen(8080);



