import express,{json} from 'express';
import cors from 'cors';
import {db,connectToDB} from "./db.js";
const app=express()

app.use(express.json())

app.use(cors())

connectToDB(()=>
{
    app.listen(8000,()=>
    {
        console.log('server started at 8000');
    });
})

app.get('/',(req,res)=>{
    res.send("Server Running Successfully ✅");
    });


app.post('/stopwatch/:hist',async(req,res)=>
{
    const cred_s=await db.collection('History').insertOne(
    {
        hist:req.params.hist
    }
    );
    res.json(cred_s)
})



app.get('/demo',async (req,res)=>
{
    const details= await db.collection("History").find().toArray();
    res.json(details);
})