import { createContext } from "react";
import { IUserContextContent } from "../models/IUserContextContent";

export const UserContext = createContext<IUserContextContent>({
  user: {
    email: "",
    role: "",
    username: "",
    isAuthenticated: false,
  },
  setUser: () => {},
});
