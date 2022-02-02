const router = require("express").Router();
const axios = require("axios");
const fs = require("fs");


let items = fs.readFileSync('./data/shopItem.json')
items = JSON.parse(items);

let ItemArray = items.map((item) => {
    let itemList = {
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        description: item.description
    }
    return itemList
})

router.get('/', (req, res) => {
    res.json(items)
});

router.get('/:itemId', (req, res) => {
    const item = items.find(item => item.id === req.params.itemId)
    if (!item) {
        return res.status(404)
        .json({
            errorMessage: `item ${req.params.itemId} not found`
        })
    }
    return res.json(item)
});

module.exports = router;