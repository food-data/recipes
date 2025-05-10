import { Repository } from 'typeorm';
import { Recipe } from '../entities/recipe.entity';
import { RecipeInput } from './graphql.typings';
import { UUID } from 'crypto';
export declare class RecipeDataService {
    private recipeRepository;
    constructor(recipeRepository: Repository<Recipe>);
    findAll(): Promise<Recipe[]>;
    save(input: RecipeInput): Promise<UUID>;
}
