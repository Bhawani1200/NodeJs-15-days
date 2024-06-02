import mongoose from 'mongoose'
const businessSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    location:{
        type:String,

    },
    phoneNumber:{
     type:Number,
     required:true
    },
    employees:{
        type:Number,
        default:10,
    }
})
export default mongoose.model("Business",businessSchema)
