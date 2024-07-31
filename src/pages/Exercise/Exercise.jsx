import React, { useState, useEffect } from "react";
import axios from "axios";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import Header from "../../components/Header/Header";
import * as S from "./Exercise.Style";

const Exercise = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputCalories, setInputCalories] = useState("");

  const fetchExerciseData = async () => {
    try {
      const response = await axios.get("https://example.com/api/exercise");
      const { time, calories } = response.data;
      setExerciseTime(time);
      setBurnedCalories(calories);
    } catch (error) {
      console.error("운동 데이터 불러오기 중 에러:", error);
    }
  };

  useEffect(() => {
    fetchExerciseData();
  }, []);

  const handleRecordClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddExercise = async () => {
    try {
      await axios.post("https://example.com/api/exercise", {
        name: exerciseName,
        time: inputTime,
        calories: inputCalories,
      });
      fetchExerciseData();
      handleCloseModal();
    } catch (error) {
      console.error("운동 데이터 추가 중 에러:", error);
    }
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>나의 활동</S.Title>
        <S.Question>오늘 내 운동 시간은?</S.Question>
        <S.Time>{exerciseTime}분</S.Time>
        <S.Icon>🥊</S.Icon>
        <S.Calories>🔥 소모량 {burnedCalories}kcal</S.Calories>
        <S.RecordButton onClick={handleRecordClick}>기록하기</S.RecordButton>

        {showModal && (
          <S.ModalOverlay>
            <S.Modal>
              <S.ModalHeader>
                <S.ModalTitle>운동 입력</S.ModalTitle>
                <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
              </S.ModalHeader>
              <S.ModalBody>
                <S.Label>
                  운동 이름 <S.Required>(필수)</S.Required>
                </S.Label>
                <S.Input
                  type='text'
                  placeholder='운동 이름 (최대 20자)'
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                />
                <S.Label>
                  운동 시간 <S.Required>(필수)</S.Required>
                </S.Label>
                <S.Input
                  type='number'
                  placeholder='분'
                  value={inputTime}
                  onChange={(e) => setInputTime(e.target.value)}
                />{" "}
                <S.Label>
                  소모 칼로리 <S.Optional>(선택)</S.Optional>
                </S.Label>
                <S.Input
                  type='number'
                  placeholder='Kcal'
                  value={inputCalories}
                  onChange={(e) => setInputCalories(e.target.value)}
                />{" "}
                <S.Note>* 칼로리를 입력하지 않으면 0으로 자동 입력돼요</S.Note>
                <S.Note>
                  * 자유 입력 운동은 1회용이라 별도 저장되지 않아요
                </S.Note>
                <S.AddButton onClick={handleAddExercise}>추가하기</S.AddButton>
              </S.ModalBody>
            </S.Modal>
          </S.ModalOverlay>
        )}
      </S.Container>
      <BottomNavBar />
    </>
  );
};

export default Exercise;
