import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PickItemsPage from "./pages/PickItems";
import FindRecipesPage from "./pages/FindRecipes";
import CookingPage from "./pages/Cooking";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        /** Login flow */
        <Route path="/" element={<LoginPage />} />
        /** User flow */
        <Route path="/pickitems" element={<PickItemsPage />} />
        <Route path="/findrecipes" element={<FindRecipesPage />} />
        <Route path="/cooking" element={<CookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
