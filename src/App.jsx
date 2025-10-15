import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "./pages/Product/Product.jsx";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import NotFound from "./pages/NotFound/NotFound";
import LogIn from "./pages/LogIn/LogIn.jsx";
import TravelJourney from "./pages/TravelJourney/TravelJourney.jsx";
import Cities from "./components/Cities/Cities.jsx";
import Countries from "./components/Countries/Countries.jsx";
import City from "./components/City/City.jsx";
import { Navigate } from "react-router";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:10000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        throw new Error("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => console.log("Data Fetched");
  }, [setCities]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<LogIn />} />
        <Route path="travel" element={<TravelJourney />}>
          <Route
            index
            element={<Navigate to='cities' replace />} />
          <Route
            path="cities"
            element={<Cities cities={cities} setCities={setCities} />}
          />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route path="countries" element={<Countries cities={cities} />} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
