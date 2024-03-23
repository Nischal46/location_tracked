import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City"
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App(){

  return (

    <CitiesProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />

      <Route path="app" element={<AppLayout/>}>
        <Route index element={<Navigate replace to="cities" />} />
        <Route path="cities" element={<CityList />} />
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList />} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </CitiesProvider>
   
  )
}

export default App;