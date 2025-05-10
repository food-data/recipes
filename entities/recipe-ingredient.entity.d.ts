import { UUID } from 'crypto';
import { Recipe } from './recipe.entity';
export declare class RecipeIngredient {
    indentifier: UUID;
    name: string;
    unitText: string;
    value: number;
    recipe: Recipe;
}
