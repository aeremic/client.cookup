import { IIngredient } from "../pages/FindRecipes/models/IIngredient";

export interface IRecipeItem {
  id: number;
  name: string;
  description: string;
  thumbnailPath: string;
  rating: number;
  ingredients: IIngredient[];
}
