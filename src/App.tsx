import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BrowserRouter";
import { EmployeesContextProvider } from "./Context/EmployeesContext";

// style
import NormalizeStyle from "./GlobalStyles/NormalizeStyle";
import { ThemeProvider } from "styled-components";

//S.O.L.I.D - SRP - Single Responsibility Principle - encapsulation with providers and routes
function App() {
  return (
    <>
      <EmployeesContextProvider>
        <ThemeProvider theme={{ mode: "dark" }}>
          <NormalizeStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </EmployeesContextProvider>
    </>
  );
}

export default App;
