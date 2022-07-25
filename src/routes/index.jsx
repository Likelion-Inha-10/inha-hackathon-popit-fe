import { IoFileTrayStacked } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import FirstChoice from "../pages/FirstChoice";
import SignUp from "../pages/SignUp";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      hi
      <Route exact path="/" element={<Intro />}></Route>
      <Route exact path="/first-choice" element={<FirstChoice />}></Route>
      <Route esact path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
