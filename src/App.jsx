import { HomePage } from "./assets/pages/HomePage";
import axios from "axios";
import {useState, useEffect} from "react";
import { CheckoutPage } from "./assets/pages/CheckoutPage";
import { OrdersPage } from "./assets/pages/OrdersPage";
import { TrackingPage } from "./assets/pages/TrackingPage";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetching cart items with expanded product details
    axios.get("api/cart-items?expand=product")
    .then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  );
}

export default App;
