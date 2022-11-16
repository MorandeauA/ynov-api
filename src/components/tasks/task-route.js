import Router from '@koa/router'
import * as TaskControllers from '#components/tasks/task-controllers.js'

const task = new Router()

task.get('/', TaskControllers.index)

task.post('/', TaskControllers.create)

task.put('/:id', TaskControllers.update)

task.delete('/:id', TaskControllers.destroy)

export default task