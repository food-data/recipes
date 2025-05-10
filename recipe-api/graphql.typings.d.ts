export declare enum RecipeCuisineEnum {
    aziatisch = "aziatisch",
    indiaas = "indiaas",
    internationaal = "internationaal",
    italiaans = "italiaans",
    nederlands = "nederlands"
}
export declare enum RecipeCategoryEnum {
    bijgerecht = "bijgerecht",
    hoofdgerecht = "hoofdgerecht",
    lunch = "lunch",
    soep = "soep"
}
export interface RecipeIngredientInput {
    name: string;
    unitText?: Nullable<string>;
    value?: Nullable<number>;
}
export interface RecipeInstructionInput {
    position: number;
    text: string;
}
export interface RecipeInput {
    name: string;
    description: string;
    text?: Nullable<string>;
    recipeCategory: RecipeCategoryEnum;
    recipeCuisine: RecipeCuisineEnum;
    recipeInstructions?: Nullable<RecipeInstructionInput[]>;
    recipeIngredients?: Nullable<RecipeIngredientInput[]>;
}
export interface RecipeIngredient {
    indentifier: UUID;
    name: string;
    unitText?: Nullable<string>;
    value?: Nullable<number>;
}
export interface RecipeInstruction {
    indentifier: UUID;
    position: number;
    text: string;
}
export interface Recipe {
    indentifier: UUID;
    name: string;
    description: string;
    text?: Nullable<string>;
    recipeCategory: RecipeCategoryEnum;
    recipeCuisine: RecipeCuisineEnum;
    recipeInstructions?: Nullable<RecipeInstruction[]>;
    recipeIngredients?: Nullable<RecipeIngredient[]>;
}
export interface IQuery {
    recipes(): Nullable<Nullable<Recipe>[]> | Promise<Nullable<Nullable<Recipe>[]>>;
}
export interface IMutation {
    insertRecipe(input: RecipeInput): UUID | Promise<UUID>;
}
export type UUID = any;
type Nullable<T> = T | null;
export {};
