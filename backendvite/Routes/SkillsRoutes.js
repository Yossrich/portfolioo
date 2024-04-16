import  express from 'express';
import { createSkill, deleteSkill, getSkillbyId, getallSkills, updateSkill, updateSkillByUser } from '../Controllers/SkillControllers.js'

const Router = express.Router();

// const SkillControllers = require ('../Controllers/SkillControllers')

//require --> CJS COMMONJS  MODULE 
// import  --> ES6 IMPORT   EXPORT
Router.post('/', createSkill)
Router.get('/:id',getSkillbyId)
Router.get('/',getallSkills)
Router.delete('/:id,',deleteSkill)
Router.put('/:id,',updateSkill)
Router.put('/user/:id,',updateSkillByUser)
export default Router;