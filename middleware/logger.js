const logger=(req,res,next)=>{
   console.log(`url:${req.url}\n method:${req.method}`)
   next()
}
export default logger;