// src/pages/Login/Login.jsx
import React, { useState } from "react";
import { Container, LoginButton, ConsentModal, Emoji } from "./Login.Style";

const Login = () => {
  const [showConsent, setShowConsent] = useState(false);

  const handleLoginClick = () => {
    setShowConsent(true);
  };

  return (
    <Container>
      <Emoji>🐰</Emoji>
      <h1>간편한 식단, 운동 기록</h1>
      <LoginButton onClick={handleLoginClick}>Google로 로그인</LoginButton>
      {showConsent && (
        <ConsentModal>
          <h2>서비스 이용 필수 동의</h2>
          <ul>
            <li>이용 약관 동의</li>
            <li>개인정보 보호정책 동의</li>
            <li>민감정보수집 및 이용동의</li>
            <li>만 14세 이상입니다</li>
          </ul>
          <button onClick={() => setShowConsent(false)}>
            네, 모두 동의해요
          </button>
        </ConsentModal>
      )}
    </Container>
  );
};

export default Login;
