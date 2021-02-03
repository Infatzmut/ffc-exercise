const mongoose = require('mongoose');
const {Schema} = mongoose;

const personSchema = new Schema({
    username: String,
    exercise: [
        {
            des: String,
            duration: Number,
            date: {}
        }
    ]
})

export default mongoose.model('Person', personSchema)