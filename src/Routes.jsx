import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404 - Not Found!</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
