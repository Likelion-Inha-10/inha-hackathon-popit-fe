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
import InputPopUp from "../popit-ui/InputPopUp/index";
import FollowerList from "../pages/FollowerList";
import FollowingList from "../pages/FollowingList";
import ReplList from "../pages/ReplList";
import MyPopList from "../pages/MyPopList";
import CategoryPopList from "../pages/CategoryPopList";
import MyPopListEdit from "../pages/MyPopListEdit";
// 라우트명은 kebab-case 로 작성합니다

const API_URL = "http://172.105.201.195:8000/";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro api={API_URL} />} />
      <Route exact path="/tutorial" element={<Tutorial api={API_URL} />} />
      <Route exact path="/login" element={<Login api={API_URL} />} />
      <Route exact path="/sign-up" element={<SignUp api={API_URL} />} />
      <Route
        exact
        path="/first-choice"
        element={<FirstChoice api={API_URL} />}
      />
      <Route exact path="/main" element={<Main api={API_URL} />} />
      <Route exact path="/menu" element={<Hamburger api={API_URL} />} />
      <Route
        exact
        path="/owner-profile"
        element={<OwnerProfile api={API_URL} />}
      />
      <Route exact path="/test" element={<Test api={API_URL} />} />
      <Route exact path="/mychat-list" element={<MyChatList api={API_URL} />} />
      <Route
        exact
        path="/profile-edit"
        element={<ProfileEdit api={API_URL} />}
      />
      <Route exact path="/more-pop" element={<MorePop api={API_URL} />} />
      <Route exact path="/inputpop" element={<InputPopUp api={API_URL} />} />
      <Route
        exact
        path="/follower-list"
        element={<FollowerList api={API_URL} />}
      />
      <Route
        exact
        path="/following-list"
        element={<FollowingList api={API_URL} />}
      />
      <Route exact path="/repl-list" element={<ReplList api={API_URL} />} />
      <Route exact path="/pop-list" element={<MyPopList api={API_URL} />} />
      <Route
        exact
        path="/pop-list/edit"
        element={<MyPopListEdit api={API_URL} />}
      />
      <Route
        exact
        path="/pop-list/:title"
        element={<CategoryPopList api={API_URL} />}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
