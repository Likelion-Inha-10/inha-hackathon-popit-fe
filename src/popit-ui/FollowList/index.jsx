import styled from "styled-components";
import ProfileIcon from "./../ProfileIcon/index";
import Button from "./../Button/index";
import Flex from "./../Flex/index";
import Typography from "./../Typography/index";
import Margin from "./../Margin/index";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 48px;
`;

const ProfileWrapper = styled(Flex)`
  width: 110px;
`;

const FollowList = (props) => {
  return (
    <>
      <Wrapper justify="space-between" align="center">
        <Margin width="20px" height="100%" />
        <ProfileWrapper direction="row" align="center">
          <ProfileIcon size48 backImage={props.backImage} />
          <Margin width="15px" height="100%" />
          <Typography bold16>{props.name}</Typography>
        </ProfileWrapper>
        <Margin width="150px" height="100%" />
        <Button extraSmall gray onClick={props.onDelete}>
          삭제
        </Button>
        <Margin width="20px" height="100%" />
      </Wrapper>

      <Margin width="100%" height="15px" />
    </>
  );
};
export default FollowList;

/* FollowList 사용법
<FollowList name="이름" backImage="사용할이미지링크" onDelete={onDelete} />
    => onDelete는 삭제버튼 클릭했을 때 실행되는 함수
*/
