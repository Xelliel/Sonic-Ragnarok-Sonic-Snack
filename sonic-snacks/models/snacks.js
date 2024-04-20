const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema ({
    name:'Cheetos',
    price:'$5.99',
    description:'Yummy Crunchy Snack',
}, {
    name:'Sour Patch Kids',
    price:'$5.99',
    description:'Sweet and Sour',
}, {
    name:'Onion Rings',
    price:'$6.99',
    description:'Steaming hot and crunchy'
}]

module.exports = mongoose.model("Item", itemSchema);