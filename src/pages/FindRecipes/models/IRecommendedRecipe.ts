import { IIngredient } from "./IIngredient";

export interface IRecommendedRecipe {
  id: number;
  name: string;
  description: string;
  thumbnailPath: string;
  ingredients: IIngredient[];
}
