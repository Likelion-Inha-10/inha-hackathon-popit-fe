import styled from "styled-components";

const Image = styled.img`
  background-image: url(${(props) => props.image});
  width: 96px;
  height: 96px;
  border: none;
  margin-top: ${(props) => (props.margintop ? props.margintop : "none")};
  margin-left: ${(props) => (props.marginleft ? props.marginleft : "none")};
  margin-right: ${(props) => (props.marginright ? props.marginright : "none")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "none"};
`;
const Categoryicon = (props) => {
  return (
    <Image
      src={props.image}
      margintop="15px"
      marginleft="15px"
      marginright="15px"
      margindbottom="15px"
    />
  );
};

export default Categoryicon;
