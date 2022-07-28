import cat from "../image/babo-cat.png";
import React, { createContext, useState } from "react";
export default {
  colors: {
    backgroundColor: "000000",
    main: "#FFC74A",
    orange: "#FFA751",
    yellow: "#FFE259",
    black: "#000000",
    green: "#34BA05",
    white: "#FFFFFF",
    gray: "#DDDDDD",
    whitegray: "#F7F7F7",
    middlegray: "#C1C1C1",
    darkgray: "#7b7b7b",
    warningred: "#CF5959",
  },

  user: {
    name: "sehyun",
    more: "dafdfa",
    black: "#000000",
    pop: "이건 팝 데이터",
    image: cat,
    likes: 24,
    repls: 324,

  },
};



//carrier/src/assets/theme/index.jsx 참고!!
// 색상을 가져다 쓰는 것임, 색상 지정해주는 것임 가져다 쓸 때에는
//background-color: ${(props) => props.theme.colors.primary};와 같이
//primary 부분에 orange, yellow, black 등등 가져다 쓰면 됩니다
//?? backgroundcolor는 그라데이션이라서 구현아직 못했어요
