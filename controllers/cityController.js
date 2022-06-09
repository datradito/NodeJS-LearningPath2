const City = require('../models/City')
const Itinerary = require('../models/Itinerary')

const cityController = {
    addCity: (req, res) => {
      const cityAdding = new City({
        cityName: req.body.cityName,
        cityPic: req.body.cityPic
      })
      cityAdding.save()
      .then(cityAdding => {
        return res.json({success: true, respuesta: cityAdding})
      })
      .catch(error => {
        return res.json({success: false, error: error})
      })
    },
    allCities: (req, res) => {
        City.find()
        .then(data => {
          return res.json({success: true, respuesta: data})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    singleCity: (req, res) => {
        const {id} = req.params

        City.findById(id)
        .then(data => {
          return res.json({success: true, respuesta: data})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
      },

      cityItinerary: async (req, res) => {
        const {id} = req.params
        const itinerary = await Itinerary.find({cityId: id})
        City.find({_id: id})
        .then(() => res.json({success: true, itinerary})
        )
        .catch(error => res.json({success: false, error: error})
        )
      }
}
module.exports = cityController