const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Pollo Guisado' },
]

const ingredients = [
    { ingredient_name: 'broccoli', ingredient_unit: 'lbs' },
    { ingredient_name: 'pesto', ingredient_unit: 'lbs' },
    { ingredient_name: 'pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'lemon', ingredient_unit: 'slices' },
    { ingredient_name: 'chicken', ingredient_unit: 'lbs' },
    { ingredient_name: 'Tomato Paste', ingredient_unit: 'Tbsp' },
    { ingredient_name: 'Peppers', ingredient_unit: 'lbs' },
    { ingredient_name: 'Onions', ingredient_unit: 'lbs' },
]

const step_ingredients = [
    // Broccoli Pesto Pasta
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 2 },
    // Lemon Chicken
    { step_id: 5, ingredient_id: 4, quantity: 1 },
    { step_id: 5, ingredient_id: 5, quantity: 0.4 },
    // Pollo Guisado
    { step_id: 8, ingredient_id: 5, quantity: 1 },
    { step_id: 9, ingredient_id: 6, quantity: 0.5 },
    { step_id: 9, ingredient_id: 7, quantity: 0.5 },
    { step_id: 10, ingredient_id: 8, quantity: 2 },
];

const steps = [
    // Broccoli Pesto Pasta
    { step_text: 'Heat pan', step_number: 1, recipe_id: 1 },
    { step_text: 'Add broccoli', step_number: 2, recipe_id: 1 },
    { step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1 },
    // Lemon Chicken
    { step_text: 'Heat oven', step_number: 1, recipe_id: 2 },
    { step_text: 'put chicken and lemon in oven', step_number: 2, recipe_id: 2 },
    { step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2 },
    // Pollo Guisado
    { step_text: 'Heat pan', step_number: 1, recipe_id: 3 },
    { step_text: 'Add chicken and wait for it to brown a little', step_number: 2, recipe_id: 3 },
    { step_text: 'Add peppers and onions', step_number: 3, recipe_id: 3 },
    { step_text: 'Add tomato paste add water to dilute', step_number: 4, recipe_id: 3 },
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes);
    await knex('ingredients').insert(ingredients);
    await knex('steps').insert(steps);
    await knex('step_ingredients').insert(step_ingredients);
};