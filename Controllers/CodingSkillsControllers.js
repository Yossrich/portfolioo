
    const CodingSkillModel = require ('../Models/CodingSkills');
    //ajouter contact 
    
    exports.createCodingSkill = async  (req,res) =>{
        try {
         const data = req.body   
        const CodingskillObj = {
            name : data.name,
            domain : data.domain,
            level: data.level,
        };
        const Codingskill = new CodingSkillModel({ ...CodingskillObj });
        await Codingskill.save();
    
        res.status(200).json({ message: "Nouveau skill crée", data: CodingskillObj });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
    //edit contact
    exports.getCodingSkillbyId = async (req,res)=>{
        try {
            const param = req.params.id;
        
            const Codingskill = await CodingSkillModel.findById({ param });
        
            if (!Codingskill) {
              res.status(400).json({ message: "CodingSkill not found" });
            }
        
            res.status(200).json({ message: "Codingskill récupéré", data: Codingskill });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        };
        // lister contact
        exports.getallCodingSkills = async (req,res) =>{
            try {
                const CodingSkill = await CodingSkillModel.find();
                res.status(200).json({ message: "skills recupéré", data: CodingSkill });
              } catch (error) {
                res.status(500).json({ message: error.message });
              }
            };
            
        //Delete contact
        exports.deleteCodingSkill = async (req,res)=>{
            try {
            const param = req.params.id
    
        
            const Codingskill = await CodingSkillModel.findByIdAndDelete(param);  
            if (!Codingskill) {
                res.status(400).json({ message: "Skill not found" });
              }
          
              await CodingSkillModel.findByIdAndDelete(param);
              res.status(200).json({ message: "skill supprimé" });
            } catch (error) {
              res.status(500).json({ message: error.message });
            }
          };
          
    exports.updateCodingSkill = async (req, res) => {
        try {
            const param = req.params.id
          const data = req.body;
      
          const newUpdatedCodingSkill = await CodingSkillModel.findByIdAndUpdate(
            param,
            { ...data },
            { new: true }
          );
          res.status(200).json({ message: "skill mis à jour", data: newUpdatedCodingSkill });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
    
     