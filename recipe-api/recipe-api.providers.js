"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeApiProviders = void 0;
const database_constants_1 = require("../database/database.constants");
const recipe_api_constants_1 = require("./recipe-api.constants");
const recipe_entity_1 = require("../entities/recipe.entity");
const recipe_instruction_entity_1 = require("../entities/recipe-instruction.entity");
const recipe_ingredient_entity_1 = require("../entities/recipe-ingredient.entity");
exports.recipeApiProviders = [
    {
        provide: recipe_api_constants_1.RECIPE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(recipe_entity_1.Recipe),
        inject: [database_constants_1.RECIPE_DATA_SOURCE],
    },
    {
        provide: recipe_api_constants_1.RECIPE_INSTRUCTION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(recipe_instruction_entity_1.RecipeInstruction),
        inject: [database_constants_1.RECIPE_DATA_SOURCE],
    },
    {
        provide: recipe_api_constants_1.RECIPE_INGREDIENT_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(recipe_ingredient_entity_1.RecipeIngredient),
        inject: [database_constants_1.RECIPE_DATA_SOURCE],
    },
];
//# sourceMappingURL=recipe-api.providers.js.map