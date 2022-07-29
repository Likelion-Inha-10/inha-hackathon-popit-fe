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

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={<Intro api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/tutorial"
        element={<Tutorial api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/login"
        element={<Login api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/signup"
        element={<SignUp api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/first-choice"
        element={<FirstChoice api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/main"
        element={<Main api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/menu"
        element={<Hamburger api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/owner-profile"
        element={<OwnerProfile api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/test"
        element={<Test api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/mychat-list"
        element={<MyChatList api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/profile-edit"
        element={<ProfileEdit api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/more-pop"
        element={<MorePop api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/inputpop"
        element={<InputPopUp api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/follower-list"
        element={<FollowerList api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/following-list"
        element={<FollowingList api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/repl-list"
        element={<ReplList api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/pop-list"
        element={<MyPopList api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/pop-list/edit"
        element={<MyPopListEdit api={process.env.REACT_APP_API} />}
      />
      <Route
        exact
        path="/pop-list/:title"
        element={<CategoryPopList api={process.env.REACT_APP_API} />}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
