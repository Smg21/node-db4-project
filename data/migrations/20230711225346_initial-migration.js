/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
      .createTable('recipes', table => {
          table.increments('recipe_id');
          table.string('recipe_name', 128).notNullable().unique();
      })
      .createTable('ingredients', table => {
          table.increments('ingredient_id');
          table.string('ingredient_name', 128).notNullable().unique();
          table.string('ingredient_unit').notNullable();
      })
      .createTable('steps', table => {
          table.increments('step_id');
          table.string('step_text').notNullable();
          table.integer('step_number').unsigned().notNullable();
          table.integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('recipe_id')
              .inTable('recipes')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
      })
      .createTable('step_ingredients', table => {
          table.increments('step_ingredient_id');
          table.integer('step_id')
              .unsigned()
              .notNullable()
              .references('step_id')
              .inTable('steps')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
          table.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('ingredient_id')
              .inTable('ingredients')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
          table.float('quantity').unsigned().notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('step_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes');
  };