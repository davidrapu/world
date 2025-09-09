import { BrowserRouter, Route, Routes} from "react-router-dom";
import Product from './pages/Product/Product.jsx'
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import NotFound from "./pages/NotFound/NotFound";
import LogIn from "./pages/LogIn/LogIn.jsx";
import TravelJourney from "./pages/TravelJourney/TravelJourney.jsx";
import Cities from "./components/Cities/Cities.jsx";
import Countries from "./components/Countries/Countries.jsx";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='product' element={<Product />} />
      <Route index element={<Home />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<LogIn />} />
      <Route path="app" element={<TravelJourney />}>
        <Route index element={<Cities />} />
        <Route path="cities" element={<Cities />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<p>form</p>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}
