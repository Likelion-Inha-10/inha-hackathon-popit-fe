import React, { useState } from "react";
import Layout from "../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader/index";
import List from "./components/index";
import FollowList from "./../../popit-ui/FollowList/index";
import Modal from "../../popit-ui/Modal";

const FollowingList = () => {
  const [isPopup, setIsPopup] = useState(false);

  const onDelete = () => {
    setIsPopup(true);
  };
  return (
    <>
      <Layout white>
        {isPopup ? (
          <Modal
            PopModal={isPopup}
            setPopModal={setIsPopup}
            content="팔로잉를 삭제하시겠습니까?"
            leftButton="취소"
            rightButton="삭제"
            type="noticePopUp"
            usage="삭제"
          />
        ) : (
          <></>
        )}

        <MainHeader page="others" title="홍길동" />
        <List borderbottom2="2px solid #626262" />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
      </Layout>
    </>
  );
};

export default FollowingList;
