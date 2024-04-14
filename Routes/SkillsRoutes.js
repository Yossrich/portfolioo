const express = require('express');

const Router = express.Router();

const SkillControllers = require ('../Controllers/SkillControllers')


Router.post('/', SkillControllers.createSkill)
Router.get('/:id',SkillControllers.getSkillbyId)
Router.get('/',SkillControllers.getallSkills)
Router.delete('/:id,',SkillControllers.deleteSkill)
Router.put('/:id,',SkillControllers.updateSkill)
module.exports = Router;