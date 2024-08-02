import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login/Login";
import Diet from "./pages/Diet/Diet";
import Profile from "./pages/Profile/Profile";
import UserInfo from "./pages/UserInfo/UserInfo";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </>
  );
};

export default App;
