import React, { useState } from "react";
import Layout from "../../popit-ui/Layout/index";
import MainHeader from "../../popit-ui/MainHeader/index";
import List from "./components/index";
import FollowList from "./../../popit-ui/FollowList/index";
import Modal from "../../popit-ui/Modal";

const FollowingList = ({ api }) => {
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
          name="팝잇"
          backImage="https://i.pinimg.com/736x/fb/8a/2c/fb8a2c153f6dc4cc0e18c4365046cab1.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="최고다"
          backImage="https://i.pinimg.com/736x/33/9f/a2/339fa2e7b16db95d655237965288ec21.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="최재오"
          backImage="https://i.pinimg.com/564x/82/97/de/8297dee2d3f3e92a18cca6191d35938d.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="이성 "
          backImage="https://i.pinimg.com/736x/31/e4/84/31e4849be4b573bc4ff1b8743dc09451.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="이민성"
          backImage="https://i.pinimg.com/736x/26/c7/35/26c7355fe46f62d84579857c6f8c4ea5.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="이한주"
          backImage="https://i.pinimg.com/736x/fb/9e/38/fb9e3818ec705d54f655bf3a887d6691.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="박서정"
          backImage="https://i.pinimg.com/736x/c9/35/72/c935727e51f18bc7ec4fee7aba8da231.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="조은서"
          backImage="https://i.pinimg.com/564x/c8/ea/4a/c8ea4a2df98c76cd7eda49685a872843.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="박세현"
          backImage="https://i.pinimg.com/736x/f3/f4/7f/f3f47fb984d7bbcd538e86d1504a03b6.jpg"
          onDelete={onDelete}
        />
        <FollowList
          name="❤❤"
          backImage="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
          onDelete={onDelete}
        />
      </Layout>
    </>
  );
};

export default FollowingList;
