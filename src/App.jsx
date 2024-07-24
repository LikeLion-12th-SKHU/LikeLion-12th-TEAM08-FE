import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Main from "./pages/Main/Main";
import Weight from "./pages/Weight/Weight";
import Exercise from "./pages/Exercise/Exercise";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />

        {/* <Route
          path='/diet'
          element={<Diet/>}
        /> */}
        <Route
          path='/weight'
          element={<Weight />}
        />
        <Route
          path='/exercise'
          element={<Exercise />}
        />
        {/* <Route
          path='/profile'
          element={<Profile/>}
        />  */}
      </Routes>
    </>
  );
};

export default App;
