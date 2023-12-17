import { IIngredient } from "./IIngredient";

export interface IRecommendedRecipe {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  ingredients: IIngredient[];
}
