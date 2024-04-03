import { IUser } from "../../Profile/models/IUser";

export interface IComment {
  user: IUser;
  content: string;
  rating: number;
}
