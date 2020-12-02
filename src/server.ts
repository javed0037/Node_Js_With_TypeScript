import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import Router from "koa-router";
import UserRoute from "../src/routes/userRoutes" 
import { config } from '../src/config'
const app = new Koa();
// const Port = process.env.Port || 5000;
const router = new Router();

app.use(bodyParser());
app.use(cors({
    origin: "*"
}))

app.use(logger());

router.get('/javed', async (ctx)=>{
    try{
   ctx.body = {
       status: "success"
   }

} catch(err){
    console.error(err)

}
})

app.use(UserRoute.routes())





app.listen(config.Port, async ()=>{
    console.log('app is running on the port',config.Port);
    
}).on('error',(err)=>{
    console.log('eror',err);
    
});
