const express = require('express')
const Feedback = require('../../App/controllers/FeedbackController')
const uploadFile = require('../../utils/uploadFiles')
const authenToken = require('../../utils/authenToken')
const router = express.Router()

router.post('/write',authenToken,uploadFile().array('imageFeedback',3),Feedback.write)
router.delete('/delete',authenToken,Feedback.delete)
router.post('/favourite',authenToken,Feedback.favourite)
router.get('/show',Feedback.show)

module.exports = router