const express=require('express')
const {MongoClient,ObjectID}=require('mongodb')
const bodyParser=require('body-parser')
const assert=require('assert')
const cors=require('cors')

const app=express()

app.use(bodyParser.json())
app.use(cors())


const mongo_url='mongodb://localhost:27017'
const database='listOfContact'

MongoClient.connect(mongo_url,{ useUnifiedTopology: true } ,(err,client)=>{
    assert.equal(err,null,'failed connexion')
    const db=client.db(database)

app.post('/ajouterContact',(req,res)=>{
    let newcontact=req.body
    db.collection('contacts').insertOne(newcontact,(err,data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
})

app.get('/contacts',(req,res)=>{
    db.collection('contacts').find().toArray((err,data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
})

app.put('/modifier/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let contactmodifier=req.body
    db.collection('contacts').findOneAndReplace({_id:id},contactmodifier,(err,data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
})
app.delete('/delete/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('contacts').findOneAndDelete({_id:id},(err,data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
})

})




app.listen(4000,(err)=>{
    if(err) console.log('server is not runnig')
    else console.log('server is runnig on port 4000')
})