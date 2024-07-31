import styled from "styled-components";

const HEADER_HEIGHT = "119px";
const BOTTOM_NAV_BAR_HEIGHT = "83px";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #ff9ca7;
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

export const CaloriesContainer = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProgressContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
`;

export const CaloriesInfo = styled.div`
  margin-top: 20px;
  color: #ffffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NutrientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  margin-top: 20px;
`;

export const NutrientItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const NutrientLabel = styled.div`
  font-size: 0.8rem;
  text-align: left;
  margin-bottom: 5px;
`;

export const NutrientValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: right;
`;

export const NutrientProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ffe3e3;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const NutrientProgress = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #ffd700;
  position: absolute;
  top: 0;
  left: 0;
`;
