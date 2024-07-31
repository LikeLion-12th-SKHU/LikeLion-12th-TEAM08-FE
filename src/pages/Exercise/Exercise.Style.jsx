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
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Question = styled.div`
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const Time = styled.div`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  font-size: 6rem;
  margin-bottom: 20px;
`;

export const Calories = styled.div`
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const RecordButton = styled.button`
  background-color: #ff6f61;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
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
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const Required = styled.span`
  color: #ff6f61;
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
  color: #999999;
  margin: 0;
`;

export const AddButton = styled.button`
  background-color: #ff6f61;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
`;
