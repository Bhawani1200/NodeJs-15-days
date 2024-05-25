import express  from 'express'
import productController from '../controllers/productController.js';
import auth from '../middleware/auth.js';
const router=express.Router();
router.get("/",productController.getAllProducts)
router.get("/:id",productController.getProductById)
router.get("/one",productController.getOneProduct)
 router.post('/',auth,productController.createProduct)
 router.put('/:id',productController.updateProduct)
 router.delete('/:id',productController.deleteProduct)
export default router;