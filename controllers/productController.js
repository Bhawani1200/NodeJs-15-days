import productService from "../services/productService.js"
const getAllProducts=async (req,res)=>{
  try {
    const products=await productService.getAllProducts()
     res.json(products)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// const getProductById=(req,res)=>{
//     const id=req.params.id
//   const product=productService.getProductById(id)
//   if(!product) res.status(404).send('product not found')
//   res.json(product)
//  }
 const getOneProduct=async(req,res)=>{
  try {
    const data=req.body
  const product=await productService.getOneProduct(data)
  // if(!product) res.status(404).send('product not found')
   res.json(product)
  } catch (error) { 
throw error
  }
 }
 const createProduct=(req,res)=>{
  try {
    const product= productService.createProduct(req.body)
    res.status(201).json(product)
    return product
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const updateProduct=async (req,res)=>{
   try {
    const id=req.params.id
    const product=await productService.updateProduct(id, req.body)
    if(!product) return res.status(404).send("Product not found")
      res.json(product);
   } catch (error) {
    res.status(500).send(error.message)
   }
}
//Another method
// const updateProduct=async(req,res)=>{
//   try {
//     const id=req.params.id
//     const product=await productService.updateProduct(id,req.body)
//     if(!product) res.status(404).send('product not found')
//       res.json(product)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
const deleteProduct=async (req,res)=>{
  try {
    const id=req.params.id
    const product =await productService.deleteProduct(id)
    if(!product) res.status(404).send('product not found')
    res.send(`product deleted :${id}`)
  } catch (error) {
    res.status(500).send(error.message)
  }
     } 
export default {
    getAllProducts,
    // getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}