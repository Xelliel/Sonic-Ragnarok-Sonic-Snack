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

const express = require('express');
const router = express.Router();

// Define routes for producing items
router.get('/:item', function(req, res) {
    const { item } = req.params;
    // You can perform some logic here based on the item requested
    // For example, you could fetch data from a database
    // Here, we're just sending a simple response
    res.json({
        item: item,
        status: 'produced'
    });
});

// Export the router to be used in the main application file

module.exports = produce;
