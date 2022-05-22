import "assets/css/app.css";
import Details from "pages/Details";
import HomePage from "pages/HomePage";
import Cart from "pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="categories/:idc" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path="congratulation" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
