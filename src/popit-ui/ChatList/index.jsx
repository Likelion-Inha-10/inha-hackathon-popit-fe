import { useState } from "react";
import styled from "styled-components";
import ProfileIcon from "./../ProfileIcon/index";
import Flex from "../Flex";
import Margin from "./../Margin/index";
import Typography from "./../Typography/index";
import Button from "./../Button/index";
import theme from "../../assets/theme";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 50px;
  margin: 10px 0px 10px 0px;
`;

const ProfileWrapper = styled(Flex)`
  width: 200px;
  height: 100%;
`;

const ChatList = (props) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <Wrapper justify="space-around" align="center">
        <Margin width="10px" height="100%" />
        <ProfileIcon size48 backImage={props.backImage} />
        <ProfileWrapper direction="column">
          <Typography bold12>{props.name}</Typography>
          <Margin height="2px" width="100%" />
          <Typography regular12>{props.chat}</Typography>
          <Margin height="2px" width="100%" />
          <Typography regular10 color="middlegray">
            답글 달기
          </Typography>
        </ProfileWrapper>
        {props.button ? (
          <Button extraSmall gray onClick={props.onDelete}>
            삭제
          </Button>
        ) : isClick ? (
          <>
            <Margin width="5px" height="100%" />
            <FaHeart
              onClick={() => setIsClick(!isClick)}
              color={theme.colors.black}
              size={18}
            />
            <Margin width="5px" height="100%" />
          </>
        ) : (
          <>
            <Margin width="5px" height="100%" />
            <FaRegHeart
              onClick={() => setIsClick(!isClick)}
              color={theme.colors.black}
              size={18}
            />
            <Margin width="5px" height="100%" />
          </>
        )}
        <Margin width="10px" height="100%" />
      </Wrapper>
    </>
  );
};

export default ChatList;

/* ChatList 컴포넌트 사용법
<ChatList name="이름" chat="댓글내용" /> : 좋아요 버튼이 뜨는 컴포넌트
<ChatList name="이름" chat="댓글내용" button onDelete={onDelete}/> : 삭제 버튼이 뜨는 컴포넌트
        => onDelete는 삭제 버튼 클릭했을 때 실행되는 함수

*/
