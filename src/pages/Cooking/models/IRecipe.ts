import { IIngredient } from "./IIngredient";
import { IStep } from "./IStep";

export interface IRecipe {
  name?: string;
  description?: string;
  complexity?: number;
  calories?: number;
  plateQuantity: number;
  thumbnailPath: string;

  steps?: IStep[];
  ingredients?: IIngredient[];
}
