import { INewComment } from "../../../../pages/Cooking/models/INewComment";
import { post } from "../../base";

const URL = "/comments";

export const getComments = async (recipeId: number) => {
  try {
    return await post(`${URL}/getcomments`, {
      recipeId: recipeId,
    });
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};

export const addNewComment = async (newComment: INewComment) => {
  try {
    return await post(`${URL}/createcomment`, newComment);
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
