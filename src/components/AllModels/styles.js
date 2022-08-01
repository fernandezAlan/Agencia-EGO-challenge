import styled from "styled-components";

export const PrincipalTitle = styled.h1`
  color: #373737;
  font-size: 50px;
  margin: 60px 0px;
  @media screen and (max-width: 600px) {
    font-size: 35px;
    color: #191919;
  }
`;

export const Content = styled.section`
  grid-area: content;
`;

export const ListOrderBy = styled.li`
  border-bottom: solid 1px #d8d8d8;
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0px;
  padding-left: 18px;
  &:last-child {
    border: 0px;
  }
`;
export const GridModels = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 218px 218px;
  column-gap: 20px;
  row-gap: 75px;
  margin-top: 50px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    margin-bottom: 50px;
  }
`;


