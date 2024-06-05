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
import Product from "../model/ProductModel.js";

import customDateFormat from "../utils/dateFormat.js";
const getCategories = () => {
  try {
    return Product.distinct("category");
  } catch (error) {
    throw error;
  }
};
const getBrands = () => {
  try {
    return Product.distinct("brand");
  } catch (error) {
    throw error;
  }
};
//for formatted date at the createdAt function
// const getAllProducts=async (data)=>{
//     try {
//         const products= await Product.find();
//         products.map(product=>{
//           const formattedDate=customDateFormat(product.createdAt,"MM dd yyyy")
//           return formattedDate;
//         })
//         return {
//           ...products,
//           cratedAt:formattedDate
//         }
//     } catch (error) {
//         throw error
//     }
// }
const getAllProducts = async (data) => {
  try {
    const products = await Product.find();
    return {
      ...products,
    };
  } catch (error) {
    throw error;
  }
};
const getProductById = (id) => {
  try {
    return Product.find((product) => product.id === parseInt(id));
  } catch (error) {
    throw error;
  }
};
const getOneProduct = async (data) => {
  try {
    return await Product.findOne(data);
  } catch (error) {
    throw error;
  }
};
const createProduct = async (data) => {
  // const product=new Product(data)
  // product.save()
  try {
    return await Product.create(data);
  } catch (error) {
    throw error;
  }
  // const newProduct={
  //     id:products.length+1,
  //     name:data.name,
  //     price:data.price,
  // }
  // products.push(newProduct)
  // return newProduct
};
const updateProduct = async (id, data) => {
  try {
    const product = await Product.findById(id);
    if (!product) res.status(500).send("Product not found");
    return await Product.findByIdAndUpdate(id, data);
    return "updated product";
  } catch (error) {
    throw error;
  }
};
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
const deleteProduct = async (id) => {
  try {
    return await Product.findOneAndDelete(id);
  } catch (error) {
    throw error;
  }
};
export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
  getCategories,
  getBrands,
};
