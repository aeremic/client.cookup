import { get } from "../../base-wrapper";

const URL = "/ingredients";

export const getIngredients = async () => {
  try {
    return await get(URL);
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
