import { post } from "../../base";

const URL = "/users";

export const getUserByGuid = async (guid: string) => {
  try {
    return await post(`${URL}/getuserbyguid`, { guid: guid });
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
