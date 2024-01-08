import { IExternalLogin } from "../../../../models/IExternalLogin";
import { post } from "../../base";

const URL = "/auth";

export const externalLogin = async (modelToPost: IExternalLogin) => {
  try {
    return await post(`${URL}/externallogin`, modelToPost); // TODO: Remove false flag!
  } catch (err) {
    console.log(err); // TODO: Fix for PROD.
  }
};
