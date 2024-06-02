import adminService from "../services/adminService.js"

const registerAdmin=async(req,res)=>{
    try {
        const business= await adminService.registerAdmin(req.body)
        res.json(business)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const loginAdmin=async(req,res)=>{
    try {
        const business=await adminService.loginAdmin(req.body)
        res.json(business)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export default {
registerAdmin,
loginAdmin
}