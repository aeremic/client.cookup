import { IGetRecommendedRecipes } from "../../../../pages/FindRecipes/models/IGetRecommendedRecipes";
import { get, post } from "../../base-wrapper";

const URL = "/recipes";

export const getRecommendedRecipes = async (
  modelToPost: IGetRecommendedRecipes
) => {
  try {
    return await post(`${URL}/getrecommendedrecipes`, modelToPost);
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};

export const getRecipe = async (id: number) => {
  try {
    return await get(`${URL}/getRecipe/${id}`);
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
