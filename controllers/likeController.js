const Itinerary = require('../models/Itinerary')

const likeController = {
    like: async (req, res) => {
        const idItinerary = req.body.id
        const userId = req.user._id
        await Itinerary.findOneAndUpdate({ _id:idItinerary}, {$addToSet: {like:userId}}, {new: true})
        .then(like => {
          return res.json({success: true, respuesta: like})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    dislike: (req, res) => {
        Itinerary.findOneAndUpdate({_id: req.body.id}, {$pull: {like: req.user._id}}, {new: true})
        .then(dislike => {
          return res.json({success: true, respuesta: dislike})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    }
}

module.exports = likeController