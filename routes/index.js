const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const validator = require('../controllers/validator')
const likeController = require('../controllers/likeController')
const passport = require('passport')
const commentController = require('../controllers/commentController')
require('../config/passport')


router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
.get(cityController.singleCity)

router.route('/itineraries')
.get(itineraryController.allItinerary)
.post(itineraryController.addItinerary)

router.route('/itineraries/:id')
.get(cityController.cityItinerary)

router.route('/user/register')
.post(validator.register, userController.register)

router.route('/user/login')
.post(userController.logIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logLS)

router.route('/comments/')
.post(passport.authenticate('jwt', {session: false}), commentController.addComment)
.put(commentController.modComment)

router.route('/comments/delete')
.put(commentController.deleteComment)

router.route('/like')
.post(likeController.like)

router.route('/dislike')
.post(likeController.dislike)

module.exports = router