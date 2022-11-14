import Router from '@koa/router'
import * as ExempleControllers from '#components/exemple/exemple-controllers.js'

const exemple = new Router()

exemple.get('/', ExempleControllers.index)

exemple.get('/:id', (ctx) => {
    ctx.body= todos.find(t => t.id === parseInt(ctx.params.id))
})

exemple.post('/', ExempleControllers.create)

exemple.put('/:id', (ctx) => {
    const index= todos.findIndex(t => t.id === parseInt(ctx.params.id))
    todos[index].title= 'todo ' + (index + 1)+ ' updated'
    ctx.body = todos[index]
})

exemple.delete('/:id', (ctx) => {
    const index = todos.findIndex(t => t.id === parseInt(ctx.params.id));
    todos.splice(index, 1);
    ctx.body = todos;
});

export default exemple