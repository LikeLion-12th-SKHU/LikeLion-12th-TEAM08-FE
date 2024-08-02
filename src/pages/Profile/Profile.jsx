import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: white;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9em;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 20px 0;
`;

const UserName = styled.div`
  font-size: 1.2em;
  margin: 10px 0;
`;

const Button = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  background: white;
  border-top: 1px solid #e0e0e0;
`;

const NavItem = styled.div`
  font-size: 1.5em;
`;

function Home() {
  return (
    <Container>
      <Header>
        <Title>마이홈</Title>
      </Header>
      <InfoContainer>
        <InfoItem>
          <div>🍴 식단</div>
          <div>일반식단</div>
        </InfoItem>
        <InfoItem>
          <div>🎯 목표</div>
          <div>50kg</div>
        </InfoItem>
        <InfoItem>
          <div>⏱ 변화</div>
          <div>-0kg</div>
        </InfoItem>
      </InfoContainer>
      <Avatar>🐰</Avatar>
      <UserName>User</UserName>
      <Button>목표 변경</Button>
      <Button>계정 정보</Button>
      <NavBar>
        <NavItem>🏠</NavItem>
        <NavItem>🥄</NavItem>
        <NavItem>🕒</NavItem>
        <NavItem>💪</NavItem>
        <NavItem>🧑</NavItem>
      </NavBar>
    </Container>
  );
}

export default Home;
