import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BrowserRouter";
import TeamContextProvider from "./Context/EmployeesContext";

// style
import NormalizeStyle from "./GlobalStyles/NormalizeStyle";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <TeamContextProvider>
        <ThemeProvider theme={{ mode: "dark" }}>
          <NormalizeStyle />
          <RouterProvider router={router} />;
        </ThemeProvider>
      </TeamContextProvider>
    </>
  );
}

export default App;
