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
let products=[]
const getAllProducts=()=>{
    return products;
}
const getProductById=(id)=>{
    return products.find((product)=>product.id === parseInt(id));  
};
const createProduct=(data)=>{
    const newProduct={
        id:products.length+1,
        name:data.name,
        price:data.price,
    }
    products.push(newProduct)
    return newProduct
}
const updateProduct=(id,data)=>{
    const product=products.find((product)=>product.id===parseInt(id))
    product.name=data.name;
    product.price=data.price;
    return product
}
const deleteProduct=(id)=>{
   products= products.filter((product)=>product.id!=parseInt(id))
   return `product deleted :${id}`
}
export default{
     getAllProducts,
     getProductById,
     createProduct,
     updateProduct,
     deleteProduct
}