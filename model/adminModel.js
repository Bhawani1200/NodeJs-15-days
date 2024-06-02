import mongoose from 'mongoose';
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        phoneNumber:Number
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    }

})
export default mongoose.model("Admin",adminSchema);