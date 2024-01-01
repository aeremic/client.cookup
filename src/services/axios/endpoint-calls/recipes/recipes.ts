import { IGetRecommendedRecipes } from "../../../../pages/FindRecipes/models/IGetRecommendedRecipes";
import { get, post } from "../../base";

const URL = "/recipes";

export const getRecommendedRecipes = async (
  modelToPost: IGetRecommendedRecipes
) => {
  try {
    return await post(`${URL}/getrecommendedrecipes`, modelToPost); // TODO: Remove false flag!
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};

export const getRecipe = async (id: number) => {
  try {
    return await get(`${URL}/getRecipe/${id}`); // TODO: Remove false flag!
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
