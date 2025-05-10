import { DataSource } from 'typeorm';
import { Recipe } from '../entities/recipe.entity';
import { RecipeInstruction } from '../entities/recipe-instruction.entity';
import { RecipeIngredient } from '../entities/recipe-ingredient.entity';
export declare const recipeApiProviders: ({
    provide: `${string}-${string}-${string}-${string}-${string}`;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Recipe>;
    inject: string[];
} | {
    provide: `${string}-${string}-${string}-${string}-${string}`;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<RecipeInstruction>;
    inject: string[];
} | {
    provide: `${string}-${string}-${string}-${string}-${string}`;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<RecipeIngredient>;
    inject: string[];
})[];
