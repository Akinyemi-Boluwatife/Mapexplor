import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Fee from "./pages/Fee";
import Service from "./pages/Service";
import Country from "./Components/Country";
import CityList from "./Components/CityList";
import PageNotFound from "./pages/PageNotFound";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="fee" element={<Fee />} />
        <Route path="service" element={<Service />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<Country />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
