import React, { FC, useState } from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BrowserRouter";

// style
import NormalizeStyle from "./GlobalStyles/NormalizeStyle";
import { ThemeProvider } from "styled-components";



function App() {
  //const [dark, setDark] = useState(defaultState.dark);//TODO
  // const toggleDark = () => {
  //   setDark(!dark);
  // };

  return (
    <>
      <ThemeProvider theme={{ mode: "dark" }}>
        <NormalizeStyle />
        <RouterProvider router={router} />;

      </ThemeProvider>
    </>
  );
}

export default App;
