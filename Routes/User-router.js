const express = require('express')

const UserCtrl = require('../Controller/User-ctrl')
const { checkAuthUser } = require("../Middlewares/checkAuthUser");

 const router = express.Router()

 router.post('/signup',UserCtrl.SignUp)
 router.post('/signIn',UserCtrl.SignIn)
 router.post('/updateuserinfo/:id',[checkAuthUser],UserCtrl.UpdateUserInfo)

 module.exports = router

