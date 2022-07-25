import styled from "styled-components";

const Icon = styled.button`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  border: none;
  background-image: url(${(props) => props.image});
`;

const Categoryicon = (props) => {
  return <Icon image={props.image} />;
};

export default Categoryicon;
