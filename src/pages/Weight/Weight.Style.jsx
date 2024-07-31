import styled from "styled-components";

const HEADER_HEIGHT = "119px";
const BOTTOM_NAV_BAR_HEIGHT = "83px";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT};
  padding-bottom: ${BOTTOM_NAV_BAR_HEIGHT};
`;

export const WeightContainer = styled.div`
  flex: 1;
  background-color: #ffd394;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const WeightDisplay = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: white;
`;

export const Dial = styled.div`
  margin-top: 10px;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export const Icon = styled.div`
  margin-top: 10px;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #ffa726;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: ${BOTTOM_NAV_BAR_HEIGHT};
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  max-width: 375px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  width: 80%;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;
