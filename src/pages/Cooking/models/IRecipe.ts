import { IIngredient } from "./IIngredient";
import { IStep } from "./IStep";

export interface IRecipe {
  name: string;
  description: string;
  steps: IStep[];
  ingredients: IIngredient[];
}
