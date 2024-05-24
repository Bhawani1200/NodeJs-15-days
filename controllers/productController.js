import productService from "../services/productService.js"
const getAllProducts=(req,res)=>{
  const products=productService.getAllProducts()
  res.json(products)
}
const getProductById=(req,res)=>{
    const id=req.params.id
  const product=productService.getProductById(id)
  if(!product) res.status(404).send('product not found')
  res.json(product)
 }
 const createProduct=(req,res)=>{
  const product= productService.createProduct(req.body)
  res.status(201).json(product)
}
const updateProduct=(req,res)=>{
    const id=req.params.id
   const product=productService.updateProduct(id,req.body)
   if(!product) res.status(404).send('product not found')
   res.json(product)
}
const deleteProduct=(req,res)=>{
    const id=req.params.id
    productService.deleteProduct(id)
    if(!product) res.status(404).send('product not found')
    res.send(`product deleted :${id}`)
     } 
export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}