import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Layout from "../popit-ui/Layout";

const Router = () => (
  <BrowserRouter>
    <Intro />
  </BrowserRouter>
);

export default Router;
