import { HomePage } from './assets/pages/HomePage';
import { CheckoutPage } from './assets/pages/CheckoutPage';
import { OrdersPage } from './assets/pages/OrdersPage';
import { TrackingPage } from './assets/pages/TrackingPage';
import { Routes, Route } from 'react-router';
import './App.css'

function App() {  

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
