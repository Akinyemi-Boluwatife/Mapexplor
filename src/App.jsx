import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Homepage from "./pages/Homepage";
import Fee from "./pages/Fee";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="fee" element={<Fee />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
