import { get } from "../base";

const URL = "/ingredients";

export const getIngredients = async () => {
  try {
    return await get(URL); // TODO: Remove false flag!
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
