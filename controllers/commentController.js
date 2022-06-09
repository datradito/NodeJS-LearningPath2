const Itinerary = require('../models/Itinerary')

const commentController = {
    addComment: (req, res) => {
        const {id, content} = req.body
        const {user} = req
        Itinerary.findOneAndUpdate({_id: id}, {$push:{comments:{userName: user.userName, userPic: user.urlPic, content:content}} }, {new: true})
        .then(comment => {
          return res.json({success: true, respuesta: comment})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    modComment: (req, res) => {
      const {idcomment, content, id} = req.body

      Itinerary.findOneAndUpdate({_id: id}, {$set :{comments: {_id: idcomment, content: content}}}, {new: true})
      .then(comment => {
        console.log(comment)
        return res.json({success: true, respuesta: comment})
      })
      .catch(error => {
        console.log(error)
        return res.json({success: false, error: error})
      })
    },
    deleteComment: (req, res) => {
        const {id, idcomment} = req.body
        
        Itinerary.findOneAndUpdate({_id:id}, {$pull:{comments:{_id:idcomment}} }, {new: true})
        .then(comment => {
          return res.json({success: true, respuesta: comment})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    }
    
}


module.exports = commentController