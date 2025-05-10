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
exports.RecipeIngredient = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
let RecipeIngredient = class RecipeIngredient {
    indentifier;
    name;
    unitText;
    value;
    recipe;
};
exports.RecipeIngredient = RecipeIngredient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RecipeIngredient.prototype, "indentifier", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 60
    }),
    __metadata("design:type", String)
], RecipeIngredient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
        nullable: true
    }),
    __metadata("design:type", String)
], RecipeIngredient.prototype, "unitText", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        nullable: true
    }),
    __metadata("design:type", Number)
], RecipeIngredient.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => recipe_entity_1.Recipe, (recipe) => recipe.recipeIngredients),
    __metadata("design:type", recipe_entity_1.Recipe)
], RecipeIngredient.prototype, "recipe", void 0);
exports.RecipeIngredient = RecipeIngredient = __decorate([
    (0, typeorm_1.Entity)()
], RecipeIngredient);
//# sourceMappingURL=recipe-ingredient.entity.js.map