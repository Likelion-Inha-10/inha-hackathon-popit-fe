import Button from "./popit-ui/Button";
import Layout from "./popit-ui/Layout";
import Typography from "./popit-ui/Typography";
import Margin from "./popit-ui/Margin";
import RoundBox from "./popit-ui/RoundBox";
import FirstHeader from "./popit-ui/FirstHeader";
import { IoChevronBackSharp } from "react-icons/io5";
import CircleButton from "./popit-ui/CircleButton/index";
import Input from "./popit-ui/Input";

function App() {
  return (
    <>
      <Layout gradation down>
        <FirstHeader back popit></FirstHeader>

        <RoundBox white down height="785px">
          <CircleButton />
          <Button>hi</Button>
          <Button></Button>
          <Input type="text" placeholder="하이" />
          <Input type="text" placeholder="천재" />
          <Input type="text" placeholder="이몸등장" />
        </RoundBox>
      </Layout>
    </>
  );
}

export default App;
