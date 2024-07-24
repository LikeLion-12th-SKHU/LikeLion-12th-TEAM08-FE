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
        {/* 
        <Route
          path='/diet'
          component={Diet}
        />
        <Route
          path='/weight'
          component={Weight}
        />
        <Route
          path='/exercise'
          component={Exercise}
        />
        <Route
          path='/profile'
          component={Profile}
        /> */}
      </Routes>
    </>
  );
};

export default App;
