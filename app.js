import '#config/database.js'
import Exemple from '#components/exemple/exemple-model.js'
import Task from '#components/tasks/task-model.js'
import Koa from 'koa'
import respond from 'koa-respond'
import Router from '@koa/router'
import { API_V1_ROUTER } from '#routes/index.js'

const app = new Koa()

app
.use(API_V1_ROUTER.routes())
.use(respond())
.use(API_V1_ROUTER.allowedMethods())

app.listen(process.env.PORT, () => console.log(`server listening to port: ${process.env.PORT}`))