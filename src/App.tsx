import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PickItemsPage from "./pages/PickItems";
import FindRecipesPage from "./pages/FindRecipes";
import CookingPage from "./pages/Cooking";
import LoginPage from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRouteComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        /** Login flow */
        <Route path="/" element={<LoginPage />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
