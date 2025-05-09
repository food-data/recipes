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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeApiResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const recipe_data_service_1 = require("./recipe-data.service");
let RecipeApiResolver = class RecipeApiResolver {
    recipeDataService;
    constructor(recipeDataService) {
        this.recipeDataService = recipeDataService;
    }
    recipes() {
        return this.recipeDataService.findAll();
    }
    insertRecipe(input) {
        return this.recipeDataService.save(input);
    }
};
exports.RecipeApiResolver = RecipeApiResolver;
__decorate([
    (0, graphql_1.Query)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipeApiResolver.prototype, "recipes", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecipeApiResolver.prototype, "insertRecipe", null);
exports.RecipeApiResolver = RecipeApiResolver = __decorate([
    (0, graphql_1.Resolver)('RecipeApiResolver'),
    __metadata("design:paramtypes", [recipe_data_service_1.RecipeDataService])
], RecipeApiResolver);
//# sourceMappingURL=recipe-api.resolver.js.map