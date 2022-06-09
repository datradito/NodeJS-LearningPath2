const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    register: async (req, res) => {
        const {firstName, lastName, userName, password, email, urlPic, country} = req.body
        var errores = []
        const  userExist = await User.findOne({userName: userName})
        if (userExist) {
            errores.push('El nombre de usuario ya existe, elige otro')
        }
        if (errores.length === 0) {
            const passHashed = bcryptjs.hashSync(password, 10)
            var newUser = new User({
                firstName, lastName, userName, email, urlPic, password: passHashed, country
            })
            var userSave = await newUser.save()
            var token = jwt.sign({...userSave}, process.env.SECRET_KEY, {})
            
        }
        

        return res.json({success: errores.length === 0 ? true : false, 
                        errores: errores, 
                        response: errores.length === 0 && {token, urlPic: userSave.urlPic, useName: userSave.userName}}) 
    },

    logIn: async (req, res) => {
        const {userName, password} = req.body
        const userExists = await User.findOne({userName: userName})

        if (!userExists) {
            return res.json({success: false, mensaje: 'Usuario o contraseña es invalida.'})
        }
        const passMatchs = bcryptjs.compareSync(password, userExists.password)
        if (!passMatchs) {
            return res.json({success: false, mensaje: 'Usuario o contraseña es invalida.'})
        }
        
        var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
        console.log(userExists)
        return res.json({success: true, response: {token, userName: userExists.userName, urlPic: userExists.urlPic}}) 
    },
    logLS: (req, res) => {
        res.json({success: true, response: {token: req.body.token, userName: req.user.userName, urlPic: req.user.urlPic}}) 
    }

}

module.exports = userController