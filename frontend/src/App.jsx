import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayoutWeb from "./Layout/LayoutWeb";
import HomePage from "./screens/HomePage";
import ProductDetails from "./screens/Products/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route to="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
