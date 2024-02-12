import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favorite";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
