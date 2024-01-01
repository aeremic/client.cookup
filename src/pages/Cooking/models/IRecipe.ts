import { IIngredient } from "./IIngredient";

export interface IRecipe {
  name: string;
  description: string;
  instructions: string;
  ingredients: IIngredient[];
}
