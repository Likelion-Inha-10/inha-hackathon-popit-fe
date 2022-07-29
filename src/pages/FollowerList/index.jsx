import React, { useState, useEffect } from "react";
import Layout from "../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader/index";
import List from "./components/index";
import axios from "axios";
import Modal from "../../popit-ui/Modal";
import FollowList from "./../../popit-ui/FollowList/index";

const FollowerList = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [profile, setProfile] = useState([]);
  // const [nickname, setNickName] = useState("");
  // const [profile_image, setProfileImage] = useState("");

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
          backImage="https://i.pinimg.com/564x/d8/7f/84/d87f847a55b5c6707507253ff70152d9.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="박서정"
          backImage="https://i.pinimg.com/564x/f3/f9/d5/f3f9d5425a56db19079daf2932138940.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="조은서"
          backImage="https://i.pinimg.com/564x/39/48/b2/3948b27ef83e29df97d888bf9a0c1d7e.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="박세현"
          backImage="https://i.pinimg.com/564x/e6/6a/52/e66a52d25ba00c06abb36a530fa2149a.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="이한주"
          backImage="https://i.pinimg.com/564x/42/00/86/42008616e27b88717c8adcfbc35f36cd.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="이민성"
          backImage="https://i.pinimg.com/564x/0b/c8/9c/0bc89c1e4cfb105cd245f9ae345bfd29.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="박상준"
          backImage="https://i.pinimg.com/564x/d0/5e/2e/d05e2e6f488f363ecb1ef3ee8b26afe4.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="이민찬"
          backImage="https://i.pinimg.com/564x/00/4e/3e/004e3ed83a68674adc7b92716534d01e.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="조동현"
          backImage="https://i.pinimg.com/564x/6b/60/94/6b6094288ae46fcc71259f29f9200c86.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="신난다"
          backImage="https://i.pinimg.com/564x/87/a8/a3/87a8a378128df67cc09df6eda20be10f.jpg"
          onDelete={onDelete}
        />
      </Layout>
    </>
  );
};

export default FollowerList;
