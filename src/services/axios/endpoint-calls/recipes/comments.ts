import { post } from "../../base";

export const getComments = async (recipeId: number) => {
  try {
    return await post(`${URL}/getcomments`, {
      recipeId: recipeId,
    });
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
