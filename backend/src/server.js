import express,{json} from 'express';
import cors from 'cors';
import {db,connectToDB} from "./db.js";
const app=express()

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 8000;


connectToDB(() => {
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
});

app.get('/', (req, res) => {
  res.send("Server Running Successfully ✅");
});

app.get('/hello', (req, res) => {
  res.status(200).send('OK');
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


app.post('/purpose/:purpose',async(req,res)=>
{
    const cred_s=await db.collection('Purpose').insertOne(
    {
        purpose:req.params.purpose
    }
    );
    res.json(cred_s)
})


app.get('/stopwatch',async (req,res)=>
{
    const details= await db.collection("History").find().toArray();
    res.json(details);
})


app.get('/stopwatch',async (req,res)=>
{
    const details= await db.collection("Purpose").find().toArray();
    res.json(details);
})
