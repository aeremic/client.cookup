import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PickItemsPage from "./pages/PickItems";
import FindRecipesPage from "./pages/FindRecipes";
import CookingPage from "./pages/Cooking";
import LoginPage from "./pages/Login";
import RouteGuardComponent from "./components/RouteGuardComponent";
import { ICurrentUser } from "./models/ICurrentUser";
import { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { getItemByKey } from "./services/store/localStorage";

function App() {
  const [user, setUser] = useState<ICurrentUser>({
    email: "",
    role: "",
    username: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    const initUser = () => {
      const accessToken = getItemByKey("accessToken");
      console.log(accessToken);
      // setUser({
      //   email: "test",
      //   role: "test",
      //   username: "test",
      //   isAuthenticated: true,
      // });
    };

    initUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          /** Login flow */
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          /** User flow */
          <Route element={<RouteGuardComponent />}>
            <Route path="/pickitems" element={<PickItemsPage />} />
          </Route>
          <Route element={<RouteGuardComponent />}>
            <Route path="/findrecipes" element={<FindRecipesPage />} />
          </Route>
          <Route element={<RouteGuardComponent />}>
            <Route path="/cooking" element={<CookingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
