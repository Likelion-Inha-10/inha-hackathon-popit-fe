import React from "react";
import Layout from "../../popit-ui/Layout";
import ToggleButton from "../../popit-ui/ToggleButton";
import { useState } from "react";

const Main = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Layout white>
      <ToggleButton onChange={(event) => setToggled(event.target.checked)} />
      <p>The switch is {toggled ? "on" : "off"}</p>
    </Layout>
  );
};

export default Main;
