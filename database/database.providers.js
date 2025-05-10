"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const database_constants_1 = require("./database.constants");
const recipe_entity_1 = require("../entities/recipe.entity");
const recipe_instruction_entity_1 = require("../entities/recipe-instruction.entity");
const recipe_ingredient_entity_1 = require("../entities/recipe-ingredient.entity");
exports.databaseProviders = [
    {
        provide: database_constants_1.RECIPE_DATA_SOURCE,
        useFactory: async () => {
            const registerDataSource = new typeorm_1.DataSource({
                type: 'sqlite',
                database: database_constants_1.RECIPE_DATABASE,
                entities: [
                    recipe_entity_1.Recipe,
                    recipe_instruction_entity_1.RecipeInstruction,
                    recipe_ingredient_entity_1.RecipeIngredient,
                ],
                synchronize: true,
            });
            return registerDataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map