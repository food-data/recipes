import { RecipeDataService } from './recipe-data.service';
import { RecipeInput, IQuery, IMutation } from './graphql.typings';
export declare class RecipeApiResolver implements IQuery, IMutation {
    private recipeDataService;
    constructor(recipeDataService: RecipeDataService);
    recipes(): Promise<import("../entities/recipe.entity").Recipe[]>;
    insertRecipe(input: RecipeInput): Promise<`${string}-${string}-${string}-${string}-${string}`>;
}
