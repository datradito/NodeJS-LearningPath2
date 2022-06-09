const mongoose = require('mongoose')

const ItinerarySchema = new mongoose.Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    pic: {type: String, required: true},
    like: [{type: mongoose.Schema.ObjectId, ref:'user'}],
    hours: {type: Number, required: true},
    price: {type: Number, required: true},
    hashtag: [
        {type: String, required: true}
    ],
    activities: [
        {actTitle: String, actImage: String}
        ],
    comments: [
        {userPic: String, userName: String, content: String}
    ],
    cityId: { type: mongoose.Schema.ObjectId, ref: 'city'}
})

//cambiar antes de cargar base de datos
const Itinerary = mongoose.model('itinerary', ItinerarySchema)

module.exports = Itinerary