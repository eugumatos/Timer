import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ManagementControlProvider } from "./contexts/ManagementControlContext";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ManagementControlProvider>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </ManagementControlProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
