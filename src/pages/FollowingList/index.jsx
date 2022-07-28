import React from "react";
import Layout from "../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader/index";
import List from "./components/index";
import FollowList from "./../../popit-ui/FollowList/index";
const FollowingList = () => {
  return (
    <>
      <Layout white>
        <MainHeader page="others" title="홍길동" />
        <List borderbottom2="2px solid #626262" />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        />
      </Layout>
    </>
  );
};

export default FollowingList;
