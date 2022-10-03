const express = require('express')
const router  = express.Router()
const Art = require('../models/art')

//Connect to Controller
const {
    listAllArt,homePage,submitArtWork,aboutPage,contactPage,createNewArtPost,showAArt,deleteAArt

} = require('../controllers/artcontroller')

// Define Routes:
//1.Home page,Method:Get,Route:'/arts
router.get('/',homePage) 

//2.get Collection(collection page)
router.get('/collection',listAllArt)

//3.SubmitArtwork
router.get('/submitartwork', submitArtWork)

//4.About page
router.get('/about',aboutPage)

//5.Contact Page
router.get('/contact',contactPage)

//////////////////////////////////
//6.Post New Art
router.post('/collection',createNewArtPost)

//7.ShowAArt
router.get('/:id',showAArt)

//8.Delete a Art
router.delete('/:id',deleteAArt)


module.exports = router