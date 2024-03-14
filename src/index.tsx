import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { LangContextProvider } from "./store/langContext";
import { LoginContextProvider } from "./store/loginContext";
import { SidebarContextProvider } from "./store/sidebarContext";
import { ThemeContextProvider } from "./store/themeContext";

ReactDOM.render(
  <LangContextProvider>
    <LoginContextProvider>
      <SidebarContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </SidebarContextProvider>
    </LoginContextProvider>
  </LangContextProvider>,
  document.getElementById("root")
);
