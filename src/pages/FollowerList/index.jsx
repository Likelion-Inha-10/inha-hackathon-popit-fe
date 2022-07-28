import React from "react";
import Layout from "../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader/index";
import List from "./components/index";
import FollowList from "./../../popit-ui/FollowList/index";

const FollowerList = () => {
  return (
    <>
      <Layout white>
        <MainHeader page="others" title="홍길동" />
        <List borderbottom1="2px solid #626262" />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
        />
      </Layout>
    </>
  );
};

export default FollowerList;
