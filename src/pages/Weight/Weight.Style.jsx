import styled from "styled-components";

const HEADER_HEIGHT = "119px";
const BOTTOM_NAV_BAR_HEIGHT = "83px";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT};
  padding-bottom: ${BOTTOM_NAV_BAR_HEIGHT};
`;

export const WeightContainer = styled.div`
  flex: 1;
  background-color: #ffd394;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
