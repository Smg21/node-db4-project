const router = require('express').Router();

const Recipes = require('./recipes-model.js');

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.recipe_id) // eslint-disable-line
            .then(recipe => {
                if (recipe === null) {
                    res.status(404).json({
                        message: 'Recipe not found',
                    });
                } else {
                    res.json(recipe);
                }
            })
            .catch(next);
    } catch (err) {
        next(err);
    }
});

router.get('*', (req, res, next) => { // eslint-disable-line
    res.json({
        message: 'Welcome to the Recipes API',
    });
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: 'Something went wrong in the recipes router',
        stack: err.stack,
    });
});

module.exports = router;