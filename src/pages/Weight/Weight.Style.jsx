import styled from "styled-components";

const HEADER_HEIGHT = "119px";
const BOTTOM_NAV_BAR_HEIGHT = "83px";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #ffd394;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT};
  padding-bottom: ${BOTTOM_NAV_BAR_HEIGHT};
  position: relative;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 1.8rem;
  position: absolute;
  left: 20px;
`;

export const WeightDisplay = styled.div`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 5px;
  margin-top: 90px;
  font-weight: 700;
`;

export const Dial = styled.div`
  margin-top: 10px;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export const Icon = styled.div`
  margin-top: 10px;
  font-size: 10rem;
  font-weight: bold;
  color: white;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #fdb956;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 270px;
  height: 63px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: ${BOTTOM_NAV_BAR_HEIGHT};
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
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
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #ccc;
  width: 60%;
  text-align: center;
  border: none;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;
