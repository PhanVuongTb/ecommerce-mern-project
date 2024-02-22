import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayoutWeb from "./Layout/LayoutWeb";
import HomePage from "./screens/HomePage";
import ProductDetails from "./screens/Products/ProductDetails";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <>
      <Routes>
        <Route to="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
