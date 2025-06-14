import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Fee from "./pages/Fee";
import Service from "./pages/Service";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import PageNotFound from "./pages/PageNotFound";
import { Navigate } from "react-router-dom";
import { CitiesProvider } from "./Contexts/CitiesContext";
import City from "./Components/City";
import Form from "./Components/Form";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="fee" element={<Fee />} />
          <Route path="service" element={<Service />} />
          <Route path="app" element={<AppLayout />}>
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
  );
}

export default App;
