import styled from "styled-components";

const HEADER_HEIGHT = "119px";
const BOTTOM_NAV_BAR_HEIGHT = "83px";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #fa7089;
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

export const Question = styled.div`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 5px;
  margin-top: 100px;
  font-weight: 700;
`;

export const Time = styled.div`
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Icon = styled.div`
  font-size: 9rem;
`;

export const Calories = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const RecordButton = styled.button`
  background-color: #ff4466;
  color: #ffffff;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  width: 267px;
  height: 63px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: ${BOTTOM_NAV_BAR_HEIGHT};
`;

export const Modal = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 375px;
  padding: 20px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.3s ease-out;
  border-bottom: #ccc;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const Required = styled.span`
  color: #4f8bff;
  font-size: 0.8rem;
`;

export const Optional = styled.span`
  color: #999999;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Note = styled.p`
  font-size: 0.8rem;
  color: #ccc;
  margin: 0;
`;

export const AddButton = styled.button`
  background-color: #ff4466;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  height: 63px;
`;
