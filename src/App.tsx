import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PickItemsPage from "./pages/PickItems";
import FindRecipesPage from "./pages/FindRecipes";
import CookingPage from "./pages/Cooking";
import LoginPage from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRouteComponent";
import { LoginRoute } from "./components/LoginRouteComponent";
import LandingPage from "./pages/Landing";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        /** Home flow */
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        /** Login flow */
        <Route
          path="/login"
          element={
            <LoginRoute>
              <LoginPage />
            </LoginRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        /** User flow */
        <Route
          path="/pickitems"
          element={
            <PrivateRoute>
              <PickItemsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/findrecipes"
          element={
            <PrivateRoute>
              <FindRecipesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cooking"
          element={
            <PrivateRoute>
              <CookingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
