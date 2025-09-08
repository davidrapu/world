import { BrowserRouter, Route, Routes} from "react-router-dom";
import Product from './pages/Product/Product.jsx'
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='product' element={<Product />} />
      <Route path="/" element={<Home />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}
