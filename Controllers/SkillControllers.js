
  const SkillModel = require ('../Models/Skill');
  //ajouter contact 
  
  exports.createSkill = async  (req,res) =>{
      try {
       const data = req.body   
      const skillObj = {
          name : data.name,
          domain : data.domain,
          description: data.description,
          icon: data.icon ,
      };
      const skill = new SkillModel({ ...skillObj });
      await skill.save();
  
      res.status(200).json({ message: "Nouveau skill crée", data: skillObj });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  //edit contact
  exports.getSkillbyId = async (req,res)=>{
      try {
          const param = req.params.id;
      
          const skill = await SkillModel.findById({ param });
      
          if (!skill) {
            res.status(400).json({ message: "Skill not found" });
          }
      
          res.status(200).json({ message: "skill récupéré", data: skill });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
      // lister contact
      exports.getallSkills = async (req,res) =>{
          try {
              const Skill = await SkillModel.find();
              res.status(200).json({ message: "skills recupéré", data: Skill });
            } catch (error) {
              res.status(500).json({ message: error.message });
            }
          };
          
      //Delete contact
      exports.deleteSkill = async (req,res)=>{
          try {
          const param = req.params.id
  
      
          const skill = await SkillModel.findByIdAndDelete(param);  
          if (!skill) {
              res.status(400).json({ message: "Skill not found" });
            }
        
            await SkillModel.findByIdAndDelete(param);
            res.status(200).json({ message: "skill supprimé" });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        };
        
  exports.updateSkill = async (req, res) => {
      try {
          const param = req.params.id
        const data = req.body;
    
        const newUpdatedSkill = await SkillModel.findByIdAndUpdate(
          param,
          { ...data },
          { new: true }
        );
        res.status(200).json({ message: "skill mis à jour", data: newUpdatedSkill });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };