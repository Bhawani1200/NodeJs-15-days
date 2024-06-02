import Admin from '../model/adminModel.js'
import bcrypt from 'bcrypt'
const registerAdmin=async(data)=>{
    try {
        const emailExists=await Admin.findOne({email:data.email})
        if(!emailExists) throw new Error('Email already exists')
        return await Admin.create(data)
    } catch (error) {
        throw error
    }
}
const loginAdmin=async(data)=>{
    try {
        const isEmailExists=await Admin.findOne({email:data.email})
        if(!isEmailExists) throw new Error('Email already exists')
     const didMatched =  bcrypt.compare(data.password,isEmailExists.password)
     if(!didMatched) res.status(500).send('password is incorrect')
        return { status:"okay"}
    } catch (error) {
     throw error   
    }
}
export default {
    registerAdmin,
    loginAdmin
}