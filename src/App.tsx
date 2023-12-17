import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PickItemsPage from "./pages/PickItems";
import FindRecipesPage from "./pages/FindRecipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        /** User flow */
        <Route path="/" element={<PickItemsPage />} />
        <Route path="/pickitems" element={<PickItemsPage />} />
        <Route path="/findrecipes" element={<FindRecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
