import React from "react";
import Button from "../../popit-ui/Button";
import Layout from "../../popit-ui/Layout";

const Main = () => {
  return (
    <Layout white>
      <Button whiteGray redTypo>
        팔로우 취소
      </Button>

      <Button whiteGray>팝 저장</Button>

      <Button large>hi</Button>

      <Button medium>확인</Button>

      <Button medium white>
        취소
      </Button>

      <Button small>하이</Button>

      <Button extraSmall gray>
        삭제
      </Button>
    </Layout>
  );
};

export default Main;
