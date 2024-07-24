import React from "react";
import * as S from "./Main.Style";
import Header from "../../components/Header/Header";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";

const Main = () => {
  return (
    <>
      <Header />
      <S.MainContainer>메인 페이지</S.MainContainer>
      <BottomNavBar />
    </>
  );
};

export default Main;
