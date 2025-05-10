"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const database_module_1 = require("../database/database.module");
const graphql_scalars_1 = require("./graphql.scalars");
const recipe_api_providers_1 = require("./recipe-api.providers");
const recipe_data_service_1 = require("./recipe-data.service");
const recipe_api_resolver_1 = require("./recipe-api.resolver");
let RegisterModule = class RegisterModule {
};
exports.RegisterModule = RegisterModule;
exports.RegisterModule = RegisterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: (process.env.PLAYGROUND ?? 'true') == 'true',
                typePaths: [process.env.GRAPHQL ?? './graphql/**/*.graphql'],
                resolvers: { UUID: graphql_scalars_1.CustomUuidScalar },
            }),
        ],
        controllers: [],
        providers: [
            ...recipe_api_providers_1.recipeApiProviders,
            recipe_data_service_1.RecipeDataService,
            recipe_api_resolver_1.RecipeApiResolver,
        ],
    })
], RegisterModule);
//# sourceMappingURL=recipe-api.module.js.map