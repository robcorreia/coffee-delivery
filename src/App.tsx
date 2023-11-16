import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
