import styled from "styled-components";

export const BottomNavBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%; /* 화면 전체 너비를 차지 */
  max-width: 375px;
  height: 83px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  z-index: 1000; /* 다른 요소들 위에 위치하도록 z-index 설정 */
`;

export const NavItem = styled.div`
  font-size: 22px;
  a {
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  a.active {
    font-size: 35px; /* 활성 링크에 큰 폰트 적용 */
  }
`;
