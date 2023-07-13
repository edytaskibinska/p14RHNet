import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BrowserRouter";
import { EmployeesContextProvider } from "./Context/EmployeesContext";

// style
import NormalizeStyle from "./GlobalStyles/NormalizeStyle";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <EmployeesContextProvider>
        <ThemeProvider theme={{ mode: "dark" }}>
          <NormalizeStyle />
          <RouterProvider router={router} />;
        </ThemeProvider>
      </EmployeesContextProvider>
    </>
  );
}

export default App;
