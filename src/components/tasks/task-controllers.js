import Task from "#components/tasks/task-model.js"
import Joi from 'joi'

export async function index (ctx) {
    try {
        ctx.body = await Task.find({})
    } catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function indexId (ctx) {
    try {
        ctx.body = await Task.findById(ctx.params.id)
    }catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function create (ctx) {
    try {
        const taskValidationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().optional(),
            timeStamp: Joi.date().timestamp().optional(),
        })

        const { error } = taskValidationSchema.validate(ctx.request.body)
        if(error) {
            throw new Error(error)
        } else {
            ctx.body = await Task.create(ctx.request.body);
        }
        ctx.body = await Task.find({})
    } catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function update (ctx) {
    try {
        const taskValidationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string(),
            timeStamp: Joi.date().timestamp(),
        })

        const {error} = taskValidationSchema.validate(ctx.request.body)
        if(error) {
            throw new Error(error.message)
        } else {
            ctx.body = await Task.findByIdAndUpdate(ctx.params.id, ctx.request.body, { runValidators: true, new: true });
        }
        ctx.body = await Task.find({});
    } catch (e) {
        ctx.badRequest({message: e.message});
    }
}

export async function destroy (ctx) {
    try {
        ctx.body = await Task.findByIdAndDelete(ctx.params.id);
    }
    catch (e) {
        ctx.badRequest({message: e.message});
    }

}

