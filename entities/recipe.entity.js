"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const graphql_typings_1 = require("../recipe-api/graphql.typings");
const typeorm_1 = require("typeorm");
const recipe_instruction_entity_1 = require("./recipe-instruction.entity");
const recipe_ingredient_entity_1 = require("./recipe-ingredient.entity");
let Recipe = class Recipe {
    indentifier;
    name;
    description;
    text;
    recipeCategory;
    recipeCuisine;
    recipeInstructions;
    recipeIngredients;
};
exports.Recipe = Recipe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Recipe.prototype, "indentifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60, unique: true }),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Recipe.prototype, "recipeCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Recipe.prototype, "recipeCuisine", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => recipe_instruction_entity_1.RecipeInstruction, (recipeInstructions) => recipeInstructions.recipe, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Recipe.prototype, "recipeInstructions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => recipe_ingredient_entity_1.RecipeIngredient, (recipeIngredients) => recipeIngredients.recipe, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Recipe.prototype, "recipeIngredients", void 0);
exports.Recipe = Recipe = __decorate([
    (0, typeorm_1.Entity)()
], Recipe);
//# sourceMappingURL=recipe.entity.js.map