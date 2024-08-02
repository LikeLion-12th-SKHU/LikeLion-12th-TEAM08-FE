import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Main from "./pages/Main/Main";
import Weight from "./pages/Weight/Weight";
import Exercise from "./pages/Exercise/Exercise";
import Profile from "./pages/Profile/Profile";
// import Diet from "./pages/Diet/Diet";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/main'
          element={<Main />}
        />

        {/* <Route
          path='/diet'
          element={<Diet />}
        /> */}
        <Route
          path='/weight'
          element={<Weight />}
        />
        <Route
          path='/exercise'
          element={<Exercise />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
      </Routes>
    </>
  );
};

export default App;
