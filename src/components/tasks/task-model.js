import mongoose from 'mongoose'

const { Schema } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    timeStamp: {
        type: Date,
        timeStamp: true
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task