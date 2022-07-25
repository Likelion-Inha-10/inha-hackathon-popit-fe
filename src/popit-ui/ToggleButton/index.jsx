import React from "react";
import styled from "styled-components";
import Flex from "../Flex";

const InputWrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: ${(props) => props.theme.colors.main};

    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }

  &:hover + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 46px;
  height: 28px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.gray};
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 3px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  &:active:before {
    width: 25px;
  }
`;
const ToggleButton = ({ onChange }) => (
  <InputWrapper>
    <Input onChange={onChange} type="checkbox" />
    <Slider />
  </InputWrapper>
);

export default ToggleButton;
