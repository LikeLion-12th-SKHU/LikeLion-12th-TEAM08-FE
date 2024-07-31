import React, { useState } from "react";
import axios from "axios";
import * as S from "./Weight.Style";

const WeightInputModal = ({ closeModal }) => {
  const [weight, setWeight] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setIsButtonActive(e.target.value !== "");
  };

  const submitWeight = async () => {
    if (weight) {
      try {
        await axios.post("https://example.com/api/weight", { weight });
        closeModal();
      } catch (error) {
        console.error("체중 기록 중 에러:", error);
      }
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>
          체중 입력
          <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.ModalHeader>
        <S.Input
          type='number'
          value={weight}
          onChange={handleWeightChange}
          placeholder='00.0 kg'
        />
        <S.Button
          onClick={submitWeight}
          active={isButtonActive}>
          완료
        </S.Button>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default WeightInputModal;
