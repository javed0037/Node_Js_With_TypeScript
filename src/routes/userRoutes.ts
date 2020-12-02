import Routes from "koa-router";
const router = new Routes();


router.get('/getUser',async(ctx)=>{
    ctx.body = {
        status : "ping",
        data: "pong"
        
    }
})
export = router;