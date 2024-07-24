import React from "react";
import * as S from "./Main.Style";
import Header from "../../components/Header/Header";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";

const Main = () => {
  return (
    <S.MainContainer>
      <Header />
      <BottomNavBar />
    </S.MainContainer>
  );
};

export default Main;
