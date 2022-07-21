import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
