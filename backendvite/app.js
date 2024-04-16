import express from 'express'
import cors from "cors"
import CodingSkillRoute from './Routes/CodingSkillsRoutes.js';
import SkillRoute  from './Routes/SkillsRoutes.js';
import database from './config/database.js';

const app = express()
const port = 3000
app.use(cors());
 
app.use(express.json())

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.use('/api/Skill',SkillRoute)
app.use('/api/CodingSkill',CodingSkillRoute)

// app.use('/api', appRoutes)

app.use(( req, res)=>{
    res.send({message:"Server is healthy!!"});
})
 //res.status(200).json({message :'give ajout'});})

 database()
 

app.listen(port,()=>{
    console.log(`Example listening on port ${port}`)
}
)