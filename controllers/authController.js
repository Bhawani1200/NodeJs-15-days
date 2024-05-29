import authService from "../services/authService.js"
import jwt from 'jsonwebtoken'
const registerUser=async(req,res)=>{
    try {
    const user=await authService.registerUser(req.body)
    res.json(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const loginUser =async(req,res)=>{
    try {
    const user=await authService.loginUser(req.body)
    const token=jwt.sign(
        {id:user._id,email:user.email},
        process.env.JWT_SECRET,
        {
        expiresIn:"1h",
    }
)
res.cookie("token",token,{httpOnly:false})
    res.json({token})
    } catch (error) {
        res.status(404).send(error.message)
    }
}
export default{
    registerUser,
    loginUser,
   
}