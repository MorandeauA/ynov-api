import mongoose from 'mongoose'

const { Schema } = mongoose

const exempleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Exemple = mongoose.model('Exemple', exempleSchema)

//Exemple.create({
//    name: 'Test product',
//    description: 'lorem ipsum dolor sit amet',
//    colors: ['black', 'red', 'white'],
//    price: 1000
//})

const findAll = async () => {
    const exemples = await Exemple.find({})
    console.log('FIND ALL ============', exemples);
}

const findById = async () => {
    const exemple = await Exemple.findById('6372199fae83cdea5688e1c0')
    console.log('FIND BY ID ============', exemple);
}

const updatedById = async () => {
    const exemple = await Exemple.findById('6372199fae83cdea5688e1c0', {name:"Premier élément"})
    console.log('UPDATE BY ID ============', exemple);
}

const deleteById = async () => {
    const exemple = await Exemple.findByIdAndDelete('6372199fae83cdea5688e1c0')
}

//findAll()
//findById()
//updatedById()
//deleteById()

export default Exemple