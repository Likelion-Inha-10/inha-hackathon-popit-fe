import React, { useState } from "react";
import { GiLiar } from "react-icons/gi";
import GlobalStyle from "./GlobalStyle";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import theme from "../../../../assets/theme";
import Pop from "../../../../popit-ui/Pop";

const CARDS = 10;
const MAX_VISIBILITY = 3;

// const Card = ({ title, content }) => (
//   <div className="card">
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

const Card = (props, { title, content }) => (
  <div className="card">
    <Pop
      likes={theme.user.likes}
      repls={theme.user.repls}
      src={theme.user.image}
      clickMore={props.clickMore}
      setClickMore={props.setClickMore}
      popSave={props.popSave}
      setPopSave={props.setPopSave}
    >
      {theme.user.pop}
    </Pop>
  </div>
);
const StyledCarousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <IoChevronBackSharp size={35} color={theme.colors.white} />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <IoChevronForwardSharp size={35} color={theme.colors.white} />
        </button>
      )}
    </div>
  );
};

const Carousel = (props) => (
  <>
    <GlobalStyle />
    <div className="app">
      <StyledCarousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            popSave={props.popSave}
            setPopSave={props.setPopSave}
            clickMore={props.clickMore}
            setClickMore={props.setClickMore}
            title={"Card " + (i + 1)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d"
          />
        ))}
      </StyledCarousel>
    </div>
  </>
);

export default Carousel;
