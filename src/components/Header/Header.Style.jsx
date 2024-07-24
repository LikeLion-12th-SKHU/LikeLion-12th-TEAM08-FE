import styled from "styled-components";

export const Header = styled.header`
  position: fixed; /* 화면의 상단에 고정 */
  top: 0; /* 상단으로 붙이기 */
  z-index: 1000; /* 다른 요소들 위에 위치하게 하여 가려지지 않도록 */
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
  height: 119px;
  background-color: white;
  width: 100%;
  max-width: 375px;
`;

export const Date = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateChangeLeft = styled.button`
  padding: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  border: 0;
  background-color: transparent;
`;

export const DateChangeRight = styled.button`
  padding: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  border: 0;
  background-color: transparent;
`;
