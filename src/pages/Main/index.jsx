import React from "react";
import Layout from "../../popit-ui/Layout";
import ToggleButton from "../../popit-ui/ToggleButton";
import { useState } from "react";
import Pop from "../../popit-ui/Pop";
import cat from "../../assets/image/babo-cat.png";

const Main = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Layout white>
      <ToggleButton onChange={(event) => setToggled(event.target.checked)} />
      <ToggleButton onChange={(event) => setToggled(event.target.checked)} />
      <ToggleButton onChange={(event) => setToggled(event.target.checked)} />
      <ToggleButton onChange={(event) => setToggled(event.target.checked)} />
      <p>The switch is {toggled ? "on" : "off"}</p>
      <Pop src={cat} repls={1} hearts={24} small>
        daskfhaksdfh
      </Pop>
      <Pop src={cat} repls={2934} hearts={232}>
        Html은 프로그래밍 언어가 아니다
      </Pop>
    </Layout>
  );
};

export default Main;
