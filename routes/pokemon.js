const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon-controller');

router.get('/pokemon', (req, res, next) => {
    const pokemonData = pokemonController.getData();
    res.render('pokemon', pokemonData);
});

module.exports = router;