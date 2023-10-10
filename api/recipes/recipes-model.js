const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
      .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
      .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
      .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
      .select(
        'r.recipe_name',
        's.step_number',
        's.step_text',
        'i.ingredient_name',
        'i.ingredient_unit',
        'si.quantity',
        'i.ingredient_id',
        's.step_id'
      )
      .where('r.recipe_id', recipe_id)
      .orderBy('s.step_number');
  
    if (rows.length === 0) {
      return null;
    }
  
    const recipe = {
      recipe_name: rows[0].recipe_name,
      recipe_id: recipe_id,
      steps: [],
    };
  
    rows.forEach((row) => {
      const {
        step_number,
        step_text,
        ingredient_name,
        ingredient_id,
        quantity,
        step_id,
      } = row;
      const ingredient = ingredient_name
        ? { ingredient_name, ingredient_id, quantity }
        : null;
      const step = recipe.steps.find((s) => s.step_number === step_number);
      if (!step) {
        recipe.steps.push({
          step_id,
          step_number,
          step_text,
          ingredients: ingredient ? [ingredient] : [],
        });
      } else {
        step.ingredients.push(ingredient);
      }
    });
  
    return recipe;
}

module.exports = {
    getRecipeById,
}