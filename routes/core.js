const express = require('express');
const router = express.Router();




// Welcome Page
router.get('/', (request, response) => {
    response.render('core')
})







module.exports = router;