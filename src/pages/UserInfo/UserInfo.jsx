import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  GenderSelection,
  InputWrapper,
  Emoji,
  ActivitySelection,
  NextButton,
} from "./UserInfo.Style";

const UserInfo = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const navigate = useNavigate();

  const isFormComplete = gender && age && height && activityLevel;

  const handleSubmit = () => {
    if (isFormComplete) {
      navigate("/nextPage"); // Replace with the actual next page route
    }
  };

  return (
    <Container>
      <h1>맞춤 목표 계산 시작! 기본 정보를 알려주세요</h1>
      <GenderSelection>
        <Emoji
          selected={gender === "female"}
          onClick={() => setGender("female")}
        >
          👩
        </Emoji>
        <Emoji selected={gender === "male"} onClick={() => setGender("male")}>
          👨
        </Emoji>
      </GenderSelection>
      <InputWrapper>
        <label>나이</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="세"
        />
      </InputWrapper>
      <InputWrapper>
        <label>키</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="cm"
        />
      </InputWrapper>
      <ActivitySelection>
        <Emoji
          selected={activityLevel === "low"}
          onClick={() => setActivityLevel("low")}
        >
          🧘‍♀️
        </Emoji>
        <Emoji
          selected={activityLevel === "medium"}
          onClick={() => setActivityLevel("medium")}
        >
          🚶‍♂️
        </Emoji>
        <Emoji
          selected={activityLevel === "high"}
          onClick={() => setActivityLevel("high")}
        >
          🏃‍♂️
        </Emoji>
      </ActivitySelection>
      <NextButton onClick={handleSubmit} disabled={!isFormComplete}>
        다음
      </NextButton>
    </Container>
  );
};

export default UserInfo;
