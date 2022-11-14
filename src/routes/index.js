import Router from '@koa/router'
import exempleRoutes from '#components/exemple/exemple-route.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1'})

API_V1_ROUTER.use('/exemples', exempleRoutes.routes(), exempleRoutes.allowedMethods())

export { API_V1_ROUTER }

// const API_V2_ROUTER = new Router({ prefix: '/api/v2'})