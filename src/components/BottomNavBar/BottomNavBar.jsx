import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./BottomNavBar.Style";

const BottomNavBar = () => {
  return (
    <S.BottomNavBar>
      <S.NavItem>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "active" : "")}>
          🏠
        </NavLink>
      </S.NavItem>
      <S.NavItem>
        <NavLink
          to='/diet'
          className={({ isActive }) => (isActive ? "active" : "")}>
          🥄
        </NavLink>
      </S.NavItem>
      <S.NavItem>
        <NavLink
          to='/weight'
          className={({ isActive }) => (isActive ? "active" : "")}>
          🕑
        </NavLink>
      </S.NavItem>
      <S.NavItem>
        <NavLink
          to='/exercise'
          className={({ isActive }) => (isActive ? "active" : "")}>
          💪
        </NavLink>
      </S.NavItem>
      <S.NavItem>
        <NavLink
          to='/profile'
          className={({ isActive }) => (isActive ? "active" : "")}>
          🧑
        </NavLink>
      </S.NavItem>
    </S.BottomNavBar>
  );
};

export default BottomNavBar;
