import { UUID } from 'crypto';
import { RecipeCuisineEnum, RecipeCategoryEnum } from '../recipe-api/graphql.typings';
import { RecipeInstruction } from './recipe-instruction.entity';
import { RecipeIngredient } from './recipe-ingredient.entity';
export declare class Recipe {
    indentifier: UUID;
    name: string;
    description: string;
    text: string;
    recipeCategory: RecipeCategoryEnum;
    recipeCuisine: RecipeCuisineEnum;
    recipeInstructions: RecipeInstruction[];
    recipeIngredients: RecipeIngredient[];
}
