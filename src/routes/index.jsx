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
import InputPopUp from "./../popit-ui/InputPopUp/index";
<<<<<<< HEAD
import FollowerList from "../pages/FollowerList";
import FollowingList from "../pages/FollowingList";

=======
import ReplList from "../pages/ReplList";
import MyPopList from "../pages/MyPopList";
import CategoryPopList from "../pages/CategoryPopList";
import MyPopListEdit from "../pages/MyPopListEdit";
>>>>>>> 7d7b24ca7a586d2e237bef654b54fbb8b2d3a033
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
      <Route exact path="/inputpop" element={<InputPopUp />} />
<<<<<<< HEAD
      <Route exact path="/follower-list" element={<FollowerList />} />
      <Route exact path="/following-list" element={<FollowingList />} />
=======
      <Route exact path="/repl-list" element={<ReplList />} />
      <Route exact path="/pop-chest" element={<MyPopList />} />
      <Route exact path="/pop-chest/edit" element={<MyPopListEdit />} />
      <Route exact path="/pop-list/:title" element={<CategoryPopList />} />
>>>>>>> 7d7b24ca7a586d2e237bef654b54fbb8b2d3a033
    </Routes>
  </BrowserRouter>
);

export default Router;
