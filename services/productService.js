// const products=[
//     {
//         id:1,
//         name:"sneakers",
//         price:1200,
//     },
//     {
//         id:2,
//         name:"martins",
//         price:1100,
//     },
//     {
//         id:3,
//         name:"calliber",
//         price:1300,
//     },
//     {
//         id:4,
//         name:"jordan",
//         price:12000,
//     },
//     {
//         id:5,
//         name:"gold star",
//         price:1000,
//     },
// ];
import Product from '../model/ProductModel.js'
const getAllProducts=async ()=>{
    try {
        return await Product.find();
    } catch (error) {
        throw error   
    }
}
// const getProductById=(id)=>{
//     return Product.find((product)=>product.id === parseInt(id));  
// };
const getOneProduct=async (data)=>{
    try {
        return await Product.findOne(data);   
    } catch (error) {
     throw error
    }
}
const createProduct=async (data)=>{

    // const product=new Product(data)
    // product.save()
    try {
        return await Product.create(data);
        
    } catch (error) {
        throw error
        
    }
    // const newProduct={
    //     id:products.length+1,
    //     name:data.name,
    //     price:data.price,
    // }
    // products.push(newProduct)
    // return newProduct
}
const updateProduct=async (id,data)=>{
    try {
      const product=await Product.findById(id)
      if(!product)res.status(500).send('Product not found')
        return await Product.findByIdAndUpdate(id,data)
    return "updated product";
    } catch (error) {
      throw error
    }
}
//Another method
// const updateProduct=async (id,data)=>{
//     try {
//       const product=await Product.findById(id)
//       if(!product)res.status(500).send('Product not found')
//         return await Product.updateOne({
//     _id:id,
// },{
//     $set:data
// })
    
//     } catch (error) {
//       throw error
//     }
// }
const deleteProduct= async (id)=>{
  try {
    return await Product.findOneAndDelete(id)
  } catch (error) {
    throw error
  }
}
export default{
     getAllProducts,
    //  getProductById,
     createProduct,
     updateProduct,
     deleteProduct,
     getOneProduct
}