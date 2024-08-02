import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: #fff;
  color: black;
  text-align: center;
`;

export const GenderSelection = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    text-align: center;
  }
`;

export const Emoji = styled.div`
  font-size: 50px;
  margin: 0 10px;
  cursor: pointer;
  border: ${({ selected }) => (selected ? "2px solid #000" : "none")};
  border-radius: 50%;
  padding: 10px;
`;

export const ActivitySelection = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const NextButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#ddd" : "#000")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin-top: 20px;
`;
