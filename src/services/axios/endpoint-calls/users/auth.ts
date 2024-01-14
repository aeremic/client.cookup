import { IExternalLogin } from "../../../../models/IExternalLogin";
import { post } from "../../base-wrapper";

const URL = "/auth";

export const externalLogin = async (modelToPost: IExternalLogin) => {
  try {
    return await post(`${URL}/externallogin`, modelToPost, false);
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
