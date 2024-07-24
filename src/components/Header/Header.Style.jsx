import styled from "styled-components";

export const Header = styled.header`
  padding: 16px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
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
