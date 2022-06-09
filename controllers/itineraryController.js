const Itinerary = require('../models/Itinerary')

const itineraryController = {
    addItinerary: (req, res) => {
        const itineraryadding = new Itinerary({
            title: req.body.title,
            name: req.body.name,
            pic: req.body.pic,
            like: req.body.like,
            hours: req.body.hours,
            price: req.body.price,
            hashtag: req.body.hashtag,
            activities: req.body.activities,
            comments: req.body.comments,
            cityId: req.body.cityId
        })
        itineraryadding.save()
        .then(async itineraryadd=> {
            const cityadd = await itineraryadd.populate('cityId').execPopulate()
            return res.json({success: true, respuesta: cityadd})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    allItinerary: (req, res) => {
        Itinerary.find().populate('cityId')
        .then(data => {
          return res.json({success: true, respuesta: data})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    singleItinerary: (req, res) => {
        const {id} = req.params
        Itinerary.findById(id)
        .then(data => {
          return res.json({success: true, respuesta: data})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
      }
}


module.exports = itineraryController