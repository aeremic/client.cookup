import { IGetRecommendedRecipes } from "../../../../pages/FindRecipes/models/IGetRecommendedRecipes";
import { post } from "../../base";

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

export const getRecipe = async (recipeId: number, userGuid: string) => {
  try {
    return await post(`${URL}/getrecipe`, {
      recipeId: recipeId,
      userGuid: userGuid,
    });
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};

export const saveRecipe = async (recipeId: number, userGuid: string) => {
  try {
    return await post(`${URL}/likerecipe`, {
      recipeId: recipeId,
      userGuid: userGuid,
    });
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
