import React from "react";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import Header from "../../components/Header/Header";
import * as S from "./Weight.Style";

function Weight() {
  return (
    <S.PageContainer>
      <Header />
      <S.WeightContainer>
        {/* <S.WeightTopTxt>나의 변화</S.WeightTopTxt> */}
      </S.WeightContainer>
      <BottomNavBar />
    </S.PageContainer>
  );
}

export default Weight;
