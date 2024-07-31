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
  position: relative;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 1.8rem;
  position: absolute;
  left: 20px;
`;

export const CaloriesContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  margin-top: 90px;
`;

export const CalColor = styled.div`
  color: #8bf698;
`;
export const ConsumedCalories = styled.div`
  font-size: 2.7rem;
  color: #ffffff;
  font-weight: 700;
`;
export const TotalCalories = styled.div`
  font-size: 1.3rem;
  color: #ff6b7b;
  font-weight: 700;
`;

export const ProgressContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
`;

export const CaloriesInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const CalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NutrientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  margin-top: 20px;
  width: 100%;
`;

export const NutrientItem = styled.div`
  width: 20%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NutrientLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
`;

export const NutrientValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
`;

export const NutrientProgressBar = styled.div`
  width: 100%;
  height: 7px;
  background-color: #ff8895;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
`;

export const NutrientProgress = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #ff8895;
  position: absolute;
  top: 0;
  left: 0;
`;
