const express = require('express');

router.get('/', (req,res) => {
    res.send('GET /snacks')
})

// get /snacks
App.get('/', (req, res) => {
    let places = []
    res.render('snacks/index')
})

module.exports = router