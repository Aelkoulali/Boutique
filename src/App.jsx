import { HomePage } from './assets/pages/HomePage';
import { CheckoutPage } from './assets/pages/CheckoutPage';
import { Routes, Route } from 'react-router';
import './App.css'

function App() {  

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
