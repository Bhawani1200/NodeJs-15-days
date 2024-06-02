import express  from 'express'
import productController from '../controllers/productController.js';
import auth from '../middleware/auth.js';
import roles from '../middleware/roles.js';
const router=express.Router();
router.get("/",productController.getAllProducts)
router.get("/categories",productController.getCategories)
router.get("/brand",productController.getBrands)
router.get("/:id",productController.getProductById)
router.get("/one",productController.getOneProduct)
router.post("/",productController.createProduct)
router.put("/:id",productController.updateProduct)
router.delete("/:id",productController.deleteProduct)
// Middleware routes
//  router.post('/',auth,productController.createProduct)
//  router.delete('/:id',auth,roles("ADMIN"),productController.deleteProduct)
export default router;