import { IoFileTrayStacked } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import FirstChoice from "../pages/FirstChoice";
import SignUp from "../pages/SignUp";
import Tutorial from "../pages/Tutorial";
import Main from "../pages/Main/index";
import Login from "./../pages/Login/index";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />}></Route>
      <Route exact path="/tutorial" element={<Tutorial />}></Route>
      <Route exact path="/first-choice" element={<FirstChoice />}></Route>
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/main" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
