import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Main.Style";
import Header from "../../components/Header/Header";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Main() {
  const [consumedCalories, setConsumedCalories] = useState(10);
  const [totalCalories, setTotalCalories] = useState(100);
  const [consumedCarbs, setConsumedCarbs] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [consumedProtein, setConsumedProtein] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [consumedFat, setConsumedFat] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://example.com/api/nutrition");
      const {
        calories: { consumed, total, burned },
        carbs: { consumed: carbsConsumed, total: carbsTotal },
        protein: { consumed: proteinConsumed, total: proteinTotal },
        fat: { consumed: fatConsumed, total: fatTotal },
      } = response.data;
      setConsumedCalories(consumed);
      setTotalCalories(total);
      setBurnedCalories(burned);
      setConsumedCarbs(carbsConsumed);
      setTotalCarbs(carbsTotal);
      setConsumedProtein(proteinConsumed);
      setTotalProtein(proteinTotal);
      setConsumedFat(fatConsumed);
      setTotalFat(fatTotal);
    } catch (error) {
      console.error("데이터 불러오기 중 에러:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const caloriePercentage = (consumedCalories / totalCalories) * 100;
  const carbsPercentage = (consumedCarbs / totalCarbs) * 100;
  const proteinPercentage = (consumedProtein / totalProtein) * 100;
  const fatPercentage = (consumedFat / totalFat) * 100;

  return (
    <>
      <Header />
      <S.PageContainer>
        <S.Title>오늘 하루</S.Title>
        <S.CaloriesContainer>
          <S.ConsumedCalories>{consumedCalories}&nbsp;</S.ConsumedCalories>
          <S.TotalCalories>/ {totalCalories} kcal</S.TotalCalories>
        </S.CaloriesContainer>
        <S.ProgressContainer>
          <CircularProgressbar
            value={caloriePercentage}
            styles={buildStyles({
              pathColor: "#FFE3E3",
              trailColor: "#FF8895",
            })}
            strokeWidth={15}
          />
          <S.IconContainer>🐰</S.IconContainer>
        </S.ProgressContainer>
        <S.CaloriesInfo>
          <span>🔥 {burnedCalories}kcal 소모</span>
          <span>&nbsp; | &nbsp;</span>
          <S.CalContainer>
            <S.CalColor>
              {totalCalories - consumedCalories} kcal&nbsp;
            </S.CalColor>{" "}
            더 먹을 수 있어요
          </S.CalContainer>
        </S.CaloriesInfo>
        <S.NutrientContainer>
          <S.NutrientItem>
            <S.NutrientLabel>탄수화물</S.NutrientLabel>
            <S.NutrientProgressBar>
              <S.NutrientProgress percentage={carbsPercentage} />
            </S.NutrientProgressBar>
            <S.NutrientValue>
              {consumedCarbs}g / {totalCarbs}g
            </S.NutrientValue>
          </S.NutrientItem>
          <S.NutrientItem>
            <S.NutrientLabel>단백질</S.NutrientLabel>
            <S.NutrientProgressBar>
              <S.NutrientProgress percentage={proteinPercentage} />
            </S.NutrientProgressBar>
            <S.NutrientValue>
              {consumedProtein}g / {totalProtein}g
            </S.NutrientValue>
          </S.NutrientItem>
          <S.NutrientItem>
            <S.NutrientLabel>지방</S.NutrientLabel>
            <S.NutrientProgressBar>
              <S.NutrientProgress percentage={fatPercentage} />
            </S.NutrientProgressBar>
            <S.NutrientValue>
              {consumedFat}g / {totalFat}g
            </S.NutrientValue>
          </S.NutrientItem>
        </S.NutrientContainer>
      </S.PageContainer>
      <BottomNavBar />
    </>
  );
}

export default Main;
