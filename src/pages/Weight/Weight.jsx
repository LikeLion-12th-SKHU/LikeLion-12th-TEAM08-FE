import React, { useState, useEffect } from "react";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import Header from "../../components/Header/Header";
import * as S from "./Weight.Style";
import WeightInputModal from "./WeightInputModal";
import axios from "axios";

function Weight() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weight, setWeight] = useState("00.0");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchWeight = async () => {
    try {
      const response = await axios.get("https://example.com/api/weight");
      setWeight(response.data.weight);
    } catch (error) {
      console.error("체중 불러오기 중 에러:", error);
    }
  };

  useEffect(() => {
    fetchWeight();
  }, []);

  return (
    <S.PageContainer>
      <Header />
      <S.WeightContainer>
        <S.Title>나의 변화</S.Title>
        <S.WeightDisplay>오늘 내 체중은?</S.WeightDisplay>
        <S.Dial>{weight} kg</S.Dial>
        <S.Icon>⏲️</S.Icon>
        <S.Button onClick={openModal}>기록하기</S.Button>
        {isModalOpen && (
          <WeightInputModal
            closeModal={() => {
              closeModal();
              fetchWeight(); // 모달이 꺼지면 업데이트된 체중을 가져옴
            }}
          />
        )}
      </S.WeightContainer>
      <BottomNavBar />
    </S.PageContainer>
  );
}

export default Weight;
