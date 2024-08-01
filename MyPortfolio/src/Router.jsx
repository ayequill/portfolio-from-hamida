import { BrowserRouter, Routes, Route } from "react-router-dom";
import Casestudy from "./pages/[id]/page.jsx";
import Home from "./pages/home.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<Casestudy />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
