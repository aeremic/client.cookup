import { ICurrentUser } from "./ICurrentUser";

export interface IUserContextContent {
  user: ICurrentUser;
  setUser: (user: ICurrentUser) => void;
}
