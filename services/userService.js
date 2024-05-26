import EMAIL_REGEX from '../constants/regex.js'
import User from '../model/userModel.js'
import bcrypt from 'bcrypt'
const registerUser=async (data)=>{
    try {
        const emailExists=await User.findOne({email:data.email})
        if(emailExists) throw new Error('Email already exists')
        const isValidEmail=data.email.match(EMAIL_REGEX)
    if(!isValidEmail) throw new Error("Invalid email address")
        const hashedPassword=bcrypt.hashSync(data.password,10)
        const createUser= await User.create({
            ...data,
            password:hashedPassword
        })
        return {
            id:createUser._id,
            email:createUser.email,
            name:createUser.name,
            createdAt:createUser.createdAt,
        }
    } catch (error) {
        throw error
    }
}
const loginUser=async (data)=>{
    try {
        const emailExists=await User.findOne({email:data.email})
        if(!emailExists) throw new Error('Email not found')
       const isMatched=await bcrypt.compare(data.password,emailExists.password)
        if(!isMatched) throw new Error('password not matched')
            return {status:"okay"}
    } catch (error) {
        throw error
    }
}

export default{
    registerUser,
    loginUser
}