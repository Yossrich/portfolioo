import SkillModel from "../Models/Skill.js";
import SkillService from "../services/skill.services.js";

export const createSkill = async (req, res) => {
  try {
    const data = req.body;
    const skillObj = {
      name: data.name,
      domain: data.domain,
      description: data.description,
      icon: data.icon,
    };
    const newObj = await SkillService.create(skillObj);

    res.status(200).json({ message: "Nouveau skill crée", data: newObj });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSkillbyId = async (req, res) => {
  try {
    const { id } = req.params;

    const skill = await SkillService.getEntity({ id: id });

    if (!skill) {
      res.status(400).json({ message: "Skill not found" });
    }

    res.status(200).json({ message: "skill récupéré", data: skill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// lister contact
export const getallSkills = async (req, res) => {
  try {
    const Skill = await SkillModel.find();
    res.status(200).json({ message: "skills recupéré", data: Skill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete contact
export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    await SkillService.delete(id);
    res.status(200).json({ message: "skill supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSkillByUser = async (req, res) => {
  try {
    const param = req.params.id;
    const { domain } = req.body;

    const newUpdatedSkill = await SkillService.updateSkillByUser(param, {
      domain: domain,
    });
    res
      .status(200)
      .json({ message: "skill mis à jour", data: newUpdatedSkill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const param = req.params.id;
    const data = req.body;

    const newUpdatedSkill = await SkillService.update(param, data);
    res
      .status(200)
      .json({ message: "skill mis à jour", data: newUpdatedSkill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
