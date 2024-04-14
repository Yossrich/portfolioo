const express = require ('express')
const mongoose = require("mongoose")
const cors = require ("cors")

const app = express()
const port = 3000
app.use(cors());
 
app.use(express.json())

app.get('/', (req,res) =>{
    res.send('hello world')

})
const SkillRoute = require ('./Routes/SkillsRoutes');
app.use('/Skill',SkillRoute)
const CodingSkillRoute = require ('./Routes/CodingSkillsRoutes');
app.use('/CodingSkill',CodingSkillRoute)


 //res.status(200).json({message :'give ajout'});})







 
 mongoose.connect('mongodb://localhost:27017/merncourse')
 .then(()=>{
    console.log('mongodb connected');
 })
 .catch(()=>{
    console.log('error')
 })
 
 



app.listen(port,()=>{
    console.log('Example listening on port ${port}')
}
)