import React from "react";
import { Link } from "react-router-dom";
import * as S from "./BottomNavBar.Style";

const BottomNavBar = () => {
  return (
    <S.BottomNavBar>
      <S.NavItem>
        <Link to='/'>🏠</Link>
      </S.NavItem>
      <S.NavItem>
        <Link to='/diet'>🥄</Link>
      </S.NavItem>
      <S.NavItem>
        <Link to='/weight'>🕑</Link>
      </S.NavItem>
      <S.NavItem>
        <Link to='/exercise'>💪</Link>
      </S.NavItem>
      <S.NavItem>
        <Link to='/profile'>🧑</Link>
      </S.NavItem>
    </S.BottomNavBar>
  );
};

export default BottomNavBar;
