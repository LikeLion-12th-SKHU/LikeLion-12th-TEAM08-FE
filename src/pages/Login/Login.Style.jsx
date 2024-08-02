// src/pages/Login/Login.Style.jsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5a623, #f06292);
  color: white;
  text-align: center;
`;

export const LoginButton = styled.button`
  background-color: white;
  color: #f06292;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

export const ConsentModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  h2 {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;

    li {
      margin-bottom: 10px;
    }
  }

  button {
    background-color: #f06292;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Emoji = styled.div`
  font-size: 100px;
`;
