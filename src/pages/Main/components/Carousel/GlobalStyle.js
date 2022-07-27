import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}

* {
  box-sizing: border-box;
}

.carousel {
  position: relative;
  width: 19rem;
  height: 19rem;
  perspective: 500px;
  transform-style: preserve-3d;
}

.card-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 13deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -37rem)) translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 0.8rem));
  transition: all 0.3s ease-out;
}

.card {
  width: 100%;
  height: 100%;
  background-color: hsl(280deg, 0%, calc(100% - var(--abs-offset) * 25%));
  border-radius: 1rem;
  color: #9CA3AF;
  text-align: justify;
  transition: all 0.3s ease-out;
}
.card h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 0.7em;
  color: #1F2937;
}
.card p, .card h2 {
  transition: all 0.3s ease-out;
  opacity: var(--active);
}

.nav {
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
}
.nav.left {
  transform: translateX(-100%) translatey(-50%);
}
.nav.right {
  right: 0;
  transform: translateX(100%) translatey(-50%);
}

`;

export default GlobalStyle;
