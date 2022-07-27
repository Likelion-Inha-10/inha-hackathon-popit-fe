import styled, { keyframes } from "styled-components";
import Flex from "../Flex";
import Button from "./../Button/index";
import Typography from "./../Typography/index";
import Margin from "../Margin";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
   from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled(Flex)`
  background-color: white;
  width: 300px;
  height: 150px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.2);
  animation-name: ${fadeIn};
  animation-duration: 300ms;
  animation-iteration-count: 1;
`;

const ButtonWrapper = styled(Flex)`
  padding: 20px 10px 20px 10px;
`;

const CompletePopUp = (props) => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    setTimeout(() => {
      navigate(`/login`);
    }, 350);
  };
  return (
    <Container direction="column" justify="space-around">
      <Margin height="50px" width="100%" />
      <Typography bold16 center>
        {props.content}
      </Typography>
      <Margin height="5px" width="100%" />
      <Typography regular12 center color="middlegray">
        {props.subcontent}
      </Typography>
      <ButtonWrapper justify="space-around">
        <Button onClick={onButtonClick} medium>
          확인
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default CompletePopUp;
