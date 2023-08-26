const express = require('express');
const router = express.Router();




// Registration Page
router.get('/register', (request, response) => {
    response.render('register')
})

// Login Page
router.get('/login', (request, response) => {
    response.render('login')
})


// Register route
router.post('/register', (request, resposne) =>{
    console.log(request.body)
})









module.exports = router;