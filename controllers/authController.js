
import authService from "../services/authService.js"
import jwt from 'jsonwebtoken'
import verifyPassword from "../utils/passwordVerification.js"
import createToken from "../helper/authHelper.js"
const registerUser=async(req,res)=>{
    try {
  const {email,name,password,confirmPassword}=req.body
    if(!email||!name||!password) 
        return res.status(422).send("Required params are missing")
        verifyPassword(password,confirmPassword)
    const user=await authService.registerUser(req.body)
    res.json(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
// const loginUser =async(req,res)=>{
//     try {
//     const user=await authService.loginUser(req.body)
    // console.log(user)
    // const token=jwt.sign(
    //     {id:user._id,email:user.email, roles:user.roles},
    //     process.env.JWT_SECRET,
    //     {
    //     expiresIn:"1h",
//     }
// )
// res.cookie("token",token,{httpOnly:false})
//     res.json({token})
//     } catch (error) {
//         res.status(404).send(error.message)
//     }
// }
const loginUser=async(req,res)=>{
    try {
        const user = await authService.loginUser(req.body)
        const token=createToken(user)
        res.cookie("token",token,{httpOnly:false})
            res.json({token})
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export default{
    registerUser,
    loginUser,
   
}