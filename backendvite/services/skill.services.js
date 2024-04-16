import SkillRepo from "../repositories/skill.repo"

const SkillService = {
    async create(data){
        return SkillRepo.create(data);
    },
    async getEntities(){
        return SkillRepo.getEntities();
    },
    async getEntity(id){
        return SkillRepo.getEntity(id);
    },
    async delete(id){
        return SkillRepo.delete(id);
    },
    async update(id, data){
        return SkillRepo.update(id, data)
    },
    async updateLevel(id, data){
        return SkillRepo.update(id, data)
    }
}

export default SkillService