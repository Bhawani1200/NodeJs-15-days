export default (role)=>{
    return (req,res,next)=>{
        //authorize user
        if(!req.user.roles.includes(role)){
            return res.status(403).send("Access Denied")
        }
        next();
    }
}
//status codes
// success=201,ok=200
// 400=client side error,401=unauthorized,404=Not Found,409=duplicate
// 500=server side error

