import SkillModel from "../Models/Skill.js";

const SkillRepo = {
  async create(skill) {
    try {
      const skillObj = new SkillModel({ ...skill });
      const newSkill = await skillObj.save();
      return newSkill;
    } catch (error) {
      throw error;
    }
  },
  async getEntities() {
    try {
      const skills = await SkillModel.find();
      return skills;
    } catch (error) {
      throw error;
    }
  },
  async getEntity(id) {
    try {
      const skill = await SkillModel.findById(id);
      return skill;
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const result = await SkillModel.findByIdAndDelete(id);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async update(id, data) {
    try {
      const result = await SkillModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
};


export default SkillRepo