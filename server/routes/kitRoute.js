const router = require("express").Router();
const axios = require("axios");
const fs = require("fs");


let kits = fs.readFileSync('./data/cocktailKits.json')
kits = JSON.parse(kits);

let kitArray = kits.map((kit) => {
    let kitList = {
        id: kit.id,
        image: kit.image,
        name: kit.name,
        price: kit.price,
        description: kit.description
    }
    return kitList
})

router.get('/', (req, res) => {
    res.json(kits)
});

router.get('/:kitId', (req, res) => {
    const kit = kits.find(kit => kit.id === req.params.kitId)
    if (!kit) {
        return res.status(404)
        .json({
            errorMessage: `kit ${req.params.itemId} not found`
        })
    }
    return res.json(kit)
});

module.exports = router;