import '#config/database.js'
import '#config/mailDev.js'
import Exemple from '#components/exemple/exemple-model.js'
import Task from '#components/task/task-model.js'
import User from '#components/user/user-model.js'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import respond from 'koa-respond'
import { API_V1_ROUTER } from '#routes/index.js'
import cors from '@koa/cors'
 
const app = new Koa()

app
.use(cors('*'))
.use(bodyParser())
.use(respond())
.use(API_V1_ROUTER.routes())
.use(API_V1_ROUTER.allowedMethods())
app.listen(process.env.PORT, () => console.log(`Server listening to port: ${process.env.PORT}`))