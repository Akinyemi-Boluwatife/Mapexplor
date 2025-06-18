import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CitiesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/FakeAuthenticationContext";
import ProtectedRoute from "./pages/ProtectedRoute";

// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import Fee from "./pages/Fee";
// import Service from "./pages/Service";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import { Navigate } from "react-router-dom";
import City from "./Components/City";
import Form from "./Components/Form";
import SpinnerFullPage from "./Components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const Fee = lazy(() => import("./pages/Fee"));
const Service = lazy(() => import("./pages/Service"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

// dist/assets/index-da08649f.css          51.54 kB │ gzip:  11.47 kB
// dist/assets/index-ab6d53a1.js          509.75 kB │ gzip: 148.75 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="login" element={<Login />} />
              <Route path="fee" element={<Fee />} />
              <Route path="service" element={<Service />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
