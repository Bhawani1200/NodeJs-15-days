const TOKEN=12345;
const auth=(req,res,next)=>{
    const {authorization}=req.headers
    if(authorization&&authorization===`Bearer ${TOKEN}`){
        next()
    }else{
        res.status(404).send('Unauthorized token')
    }
}
export default auth;