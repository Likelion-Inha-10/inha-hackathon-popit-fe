import styled from "styled-components";

const ProfileIcon = styled.div`
  border-radius: 50%;
  background-image: url(${(props) =>
    props.backImage
      ? props.backImage
      : "https://i.pinimg.com/564x/d0/cc/8d/d0cc8d1c3ed3493cb76b139249571cd0.jpg"});

  background-size: 100% 100%;
  overflow: hidden;
  ${(props) =>
    props.size90 &&
    `
      width: 90px;
      height: 90px;
    `}
  ${(props) =>
    props.size72 &&
    `
        width: 72px;
        height: 72px;
      `}
  ${(props) =>
    props.size60 &&
    `
      width: 60px;
      height: 60px;
    `}

${(props) =>
    props.size48 &&
    `
      width: 48px;
      height:48px;
    `}

${(props) =>
    props.size40 &&
    `
      width: 40px;
      height: 40px;
    `};
`;

export default ProfileIcon;

/* 프로필 아이콘 사용법
ex) 90x90 크기의 프로필아이콘 사용할 때 : <ProfileIcon size90 backImage="사용할이미지링크" />
*/
