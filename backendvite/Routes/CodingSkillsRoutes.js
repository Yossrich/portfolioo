import express from 'express'
import { createCodingSkill, deleteCodingSkill, getCodingSkillbyId, getallCodingSkills, updateCodingSkill } from '../Controllers/CodingSkillsControllers.js';
const Router = express.Router();



Router.post('/', createCodingSkill)
Router.get('/:id',getCodingSkillbyId)
Router.get('/',getallCodingSkills)
Router.delete('/:id,',deleteCodingSkill)
Router.put('/:id,',updateCodingSkill

)
export default Router;