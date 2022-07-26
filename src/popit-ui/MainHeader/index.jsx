import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Flex from "../Flex";
import Margin from "../Margin";
import Typography from "./../Typography/index";
import Button from "../Button";
import ProfileIcon from "../ProfileIcon";
import { IoChevronBackSharp } from "react-icons/io5";
import { TbBellRinging } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 68px;
  border-bottom: 1px #eaeaea solid;
`;

const Title = styled.div`
  padding-left: 40px;
`;

const Left = styled.div`
  padding-left: 15px;
  cursor: pointer;
`;

const Right = styled.div`
  padding-right: 20px;
  cursor: pointer;
`;

const Profile = styled.div`
  position: relative;
  top: -2px;
  padding-left: 170px;
  cursor: pointer;
`;

const MainHeader = (props) => {
  const [isClick, setIsClick] = useState(true);
  const navigate = useNavigate();

  const onAlarmClick = () => {
    setIsClick(!isClick);
  };

  const onBackClick = () => {
    navigate(-1);
  };

  const createHeader = (
    type,
    title,
    onMenuClick,
    onProfileClick,
    onButtonClick,
    bImage
  ) => {
    if (type === "main") {
      return (
        <>
          <Left>
            <Typography bold24>POP IT</Typography>
          </Left>
          <Profile onClick={onProfileClick}>
            <ProfileIcon size40 backImage={bImage} />
          </Profile>
          <Right onClick={onMenuClick}>
            <GiHamburgerMenu size="27" color="#000000" />
          </Right>
        </>
      );
    }

    if (type === "alarm") {
      return (
        <>
          <Left onClick={onBackClick}>
            <IoChevronBackSharp size="27" color="#000000" />
          </Left>
          <Typography bold20>{title}</Typography>
          <Right onClick={onAlarmClick}>
            {isClick ? (
              <TbBellRinging size="27" color="#000000" />
            ) : (
              <TbBellRinging size="27" color="#d7d7d7" />
            )}
          </Right>
        </>
      );
    }

    if (type === "profile") {
      return (
        <>
          <Left onClick={onBackClick}>
            <IoChevronBackSharp size="30" color="#000000" />
          </Left>
          <Title>
            <Typography bold20>프로필 수정</Typography>
          </Title>
          <Right>
            <Button onClick={onButtonClick} small>
              완료
            </Button>
          </Right>
        </>
      );
    }

    if (type === "others") {
      return (
        <>
          <Left onClick={onBackClick}>
            <IoChevronBackSharp size="27" color="#000000" />
          </Left>
          <Typography size="20px">{title}</Typography>
          <Margin width="50px" height="100%" />
        </>
      );
    }
  };

  return (
    <Wrapper align="center" justify="space-between">
      {createHeader(
        props.page,
        props.title,
        props.onMenuClick,
        props.onProfileClick,
        props.onButtonClick,
        props.backImage
      )}
    </Wrapper>
  );
};

export default MainHeader;

/* <Main Header 사용법>
  1. main 페이지에서 사용하는 헤더인 경우: <MainHeader page="main" onMenuClick={onMenuClick} onProfileClick={onProfileClick} backImage="사용할프로필이미지링크" />
      => onMenuClick은 햄버거 버튼 눌렀을 때의 함수
      => onProfileClick은 프로필 버튼 눌렀을 때의 함수

  2. 팝 보관함 페이지에서 사용하는 헤더인 경우: <MainHeader page="alarm" title="카테고리이름" />

  3. 프로필 수정 페이지에서 사용하는 헤더인 경우: <MainHeader page="profile" onButtonClick={onButtonClick}/>
      => onButtonClick은 완료 버튼을 눌렀을 때의 함수

  4. 1~3을 제외한 다른 페이지들에서 사용하는 헤더인 경우: <MainHeader page="others" title="페이지이름" />
      => 예) 프로필 페이지에서 사용하는 경우 <MainHeader page="others" title="댓글 작성 목록" />

  5. < 버튼 클릭시 뒤로가기가 되도록 구현해놨습니다. (따로 구현할 필요 X)

*/
