import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GlobalStyle from "./GlobalStyle";
import Router from "./routes/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
