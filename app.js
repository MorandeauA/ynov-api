import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

const todos = [
    {
        id: 1,
        title: 'acheter des patates'
    },
    {
        id: 2,
        title: 'acheter des pommes'
    },
    {
        id: 3,
        title: 'acheter des fraises'
    },
]

router.get('/todos', (ctx, next) => {
    ctx.body= todos
})

router.get('/todos/:id', (ctx) => {
    ctx.body= todos.find(t => t.id === parseInt(ctx.params.id))
})

router.post('/todos', (ctx) => {
    ctx.body= todos.push({
        id: todos.length+1,
        title: 'acheter des poires'
    })
})

router.put('/todos/:id', (ctx, next) => {
    const index= todos.findIndex(t => t.id === parseInt(ctx.params.id))
    todos[index].title= 'todo ' + (index + 1)+ ' updated'
    ctx.body = todos[index]
})

router.delete('/api/todos/:id', (ctx, next) => {
    const index = todos.findIndex(t => t.id === parseInt(ctx.params.id));
    todos.splice(index, 1);
    ctx.body = todos;
});

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT, () => console.log(`server listening to port: ${process.env.PORT}`))