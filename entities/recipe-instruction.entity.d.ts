import { UUID } from 'crypto';
import { Recipe } from './recipe.entity';
export declare class RecipeInstruction {
    indentifier: UUID;
    position: number;
    text: string;
    recipe: Recipe;
}
