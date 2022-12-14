import Router from '@koa/router'
import exempleRoutes from '#components/exemple/exemple-route.js'
import taskRoutes from '#components/tasks/task-route.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1'})

API_V1_ROUTER.use('/exemples', exempleRoutes.routes(), exempleRoutes.allowedMethods())
API_V1_ROUTER.use('/tasks', taskRoutes.routes(), taskRoutes.allowedMethods())

export { API_V1_ROUTER }
