const express = require('express');
const router = express.Router()
const authenToken = require('../../utils/authenToken');
const Bought = require('../../App/controllers/Bought');


router.get('/my-bought',authenToken,Bought.myBought)

module.exports = router