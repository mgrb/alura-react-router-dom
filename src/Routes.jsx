import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";
import PaginaPadrao from "@/components/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<div>404 - Not Found!</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
