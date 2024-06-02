import express from 'express'
const router=express.Router();
import businessController from '../controllers/businessController.js'
router.get("/",businessController.getAllDetails)
router.post("/",businessController.createBusinessDetails)
router.put("/:id",businessController.updateBusiness)
router.delete("/:id",businessController.deleteBusiness)
export default router