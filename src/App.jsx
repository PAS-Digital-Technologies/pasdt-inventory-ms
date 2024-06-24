import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ProductCard } from "./components";
import CategoriesSidebar from "./common/components/CategoriesSidebar/CategoriesSidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config/const";
import { requireAuth, requireNoAuth } from "./common";
import { Inventory } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.INVENTORY} element={requireAuth(Inventory)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
