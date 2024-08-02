import React, { useState } from "react";
import styled from "styled-components";
import Bunny from "./bunny.png"; // Import the bunny image

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #ffd1dc, #ffb3c1);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const BunnyImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Subtitle = styled.p`
  color: white;
  text-align: center;
  margin: 5px 0;
  font-size: 1em;

  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  margin-top: 20px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const ConsentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const ConsentTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const ConsentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-bottom: 20px;
`;

const ConsentItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 1em;

  @media (max-width: 600px) {
    font-size: 0.9em;
    padding: 8px 0;
  }
`;

const ConsentButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

function App() {
  const [showConsent, setShowConsent] = useState(false);

  const handleGoogleLoginClick = () => {
    setShowConsent(true);
  };

  const handleConsentClose = () => {
    setShowConsent(false);
  };

  return (
    <AppContainer>
      <BunnyImage src={Bunny} alt="Bunny" />
      <Title>검색한 식단 칼로리 자동 계산</Title>
      <Subtitle>간편한 식단, 운동 기록</Subtitle>
      <GoogleButton onClick={handleGoogleLoginClick}>
        <img
          src="https://img.icons8.com/color/16/000000/google-logo.png"
          alt="Google Logo"
        />
        Google로 로그인
      </GoogleButton>
      {showConsent && (
        <ConsentModal>
          <ConsentTitle>서비스 이용 필수 동의</ConsentTitle>
          <ConsentList>
            <ConsentItem>이용 약관 동의</ConsentItem>
            <ConsentItem>개인정보 보호방침 동의</ConsentItem>
            <ConsentItem>민감정보수집 및 이용동의</ConsentItem>
            <ConsentItem>만 14세 이상입니다</ConsentItem>
          </ConsentList>
          <ConsentButton onClick={handleConsentClose}>
            네, 모두 동의해요
          </ConsentButton>
        </ConsentModal>
      )}
    </AppContainer>
  );
}

export default App;
