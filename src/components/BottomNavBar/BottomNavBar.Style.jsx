import styled from "styled-components";

export const BottomNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
`;

export const NavItem = styled.div`
  font-size: 16px;
  color: #333;
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #007bff;
  }
`;
