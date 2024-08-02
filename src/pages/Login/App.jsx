import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
      </Routes>
    </>
  );
};

export default App;
