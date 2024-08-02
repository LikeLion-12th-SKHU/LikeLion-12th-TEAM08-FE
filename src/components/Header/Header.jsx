import React, { useState } from "react";
import * as S from "./Header.Style";

const Header = () => {
  const [date, setDate] = useState(new Date());

  const formatDate = (date) => {
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "오늘";
    } else {
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${month}.${day}`;
    }
  };

  const handlePreviousDay = () => {
    const previousDay = new Date(date);
    previousDay.setDate(date.getDate() - 1);
    setDate(previousDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    setDate(nextDay);
  };

  return (
    <S.Header>
      <S.DateChangeLeft onClick={handlePreviousDay}>&#60;</S.DateChangeLeft>
      <S.Date>🗓️ {formatDate(date)}</S.Date>
      <S.DateChangeRight onClick={handleNextDay}>&#62;</S.DateChangeRight>
    </S.Header>
  );
};

export default Header;
