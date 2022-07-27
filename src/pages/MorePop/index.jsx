import React from "react";
import Layout from "../../popit-ui/Layout";

const MorePop = () => {
  return (
    <div>
      <Layout white>
        여긴 더보기를 누르면 나오는 페이지
        <br />
        url파라미터를 이용한다. 오늘의 팝 = 1, 오늘 뜨는 = 2, 나에게맞는 =
        3으로하고 navigate("more-pop/:mainCategoryId) 형식으로 전달하여 이
        페이지를 로딩한다
        <br />
        백에서는 이 3개의 카테고리안에 pop들을 넣어주고 프론트는 map으로 팝을
        풀어내기만하면된다.
      </Layout>
    </div>
  );
};

export default MorePop;
