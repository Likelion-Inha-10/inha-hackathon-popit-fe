import { IoFileTrayStacked } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import FirstChoice from "../pages/FirstChoice";
import SignUp from "../pages/SignUp";
import Tutorial from "../pages/Tutorial/index";
import Main from "../pages/Main/index";
import Login from "../pages/Login";
import Hamburger from "../pages/Hamburger";
import OwnerProfile from "../pages/OwnerProfile";
import Test from "../pages/Test";
import MyChatList from "./../pages/MyChatList";
import ProfileEdit from "./../pages/ProfileEdit/index";
import MorePop from "../pages/MorePop";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/tutorial" element={<Tutorial />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/first-choice" element={<FirstChoice />} />
      <Route exact path="/main" element={<Main />} />
      <Route exact path="/menu" element={<Hamburger />} />
      <Route exact path="/owner-profile" element={<OwnerProfile />} />
      <Route exact path="/test" element={<Test />} />
      <Route exact path="/mychat-list" element={<MyChatList />} />
      <Route exact path="/profile-edit" element={<ProfileEdit />} />
      <Route exact path="/more-pop" element={<MorePop />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
