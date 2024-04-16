import mongoose from "mongoose";

const database = ()=> {
        mongoose.connect('mongodb://localhost:27017/merncourse')
        .then(()=>{
           console.log('mongodb connected');
        })
        .catch(()=>{
           console.log('error')
        })
  
}

export default database