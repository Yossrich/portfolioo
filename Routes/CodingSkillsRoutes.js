const express = require('express');

const Router = express.Router();

const SkillControllers = require ('../Controllers/CodingSkillsControllers')


Router.post('/', SkillControllers.createCodingSkill)
Router.get('/:id',SkillControllers.getCodingSkillbyId)
Router.get('/',SkillControllers.getallCodingSkills)
Router.delete('/:id,',SkillControllers.deleteCodingSkill)
Router.put('/:id,',SkillControllers.updateCodingSkill)
module.exports = Router;