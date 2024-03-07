import { post } from "../../base";

const URL = "/users";

export const getUserByEmail = async (email: string) => {
  try {
    return await post(`${URL}/getuserbyemail`, { email: email });
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
