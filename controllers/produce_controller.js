const express = require('express');
const produce = express.Router()

produce.get('/:beans', function(req, res){
    res.json(
        {
            food:req.params.beans,
            goodness:"alot"
        }
    )
})

module.exports = produce;
