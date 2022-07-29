import React, { useState } from "react";
import Layout from "../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader/index";
import List from "./components/index";
import FollowList from "./../../popit-ui/FollowList/index";
import Modal from "../../popit-ui/Modal";

const FollowerList = () => {
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
            content="팔로우를 삭제하시겠습니까?"
            leftButton="취소"
            rightButton="삭제"
            type="noticePopUp"
            usage="삭제"
          />
        ) : (
          <></>
        )}
        <MainHeader page="others" title="홍길동" />
        <List borderbottom1="2px solid #626262" />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="홍길동"
          backImage="https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg"
          onDelete={onDelete}
        />
      </Layout>
    </>
  );
};

export default FollowerList;
