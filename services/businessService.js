import Business from '../model/businessModel.js'
const getAllDetails=async (data)=>{
   try {
    const business=await Business.find()
    return business;
   } catch (error) {
    throw error
   }
}
const createBusinessDetails=async (data)=>{
    try {
        return await Business.create(data)
    } catch (error) {
        throw error
    }
}
const updateBusiness=async(id,data)=>{
    try {
        const business=await Business.findById(id);
        if(!business) res.status(500).send("Business  not found");
         return Business.findByIdAndUpdate(id,data)
         return 'updated business'
    } catch (error) {
        throw error
    }
}
const deleteBusiness=async(id)=>{
    try {
        const business=await Business.findByIdAndUpdate(id)
    } catch (error) {
       throw error 
    }
}
export default {
    getAllDetails,
    createBusinessDetails,
    updateBusiness
}