import styled from "styled-components";

export const PrincipalTitle = styled.h1`
  color: #373737;
  font-size: 50px;
  margin: 60px 0px;
`;

export const Content = styled.section`
  grid-area: content;
`;

export const Filters = styled.ul`
  padding: 0px;
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #d8d8d8;
`;

export const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #373737;
`;

export const WrapOrderBy = styled.div`
  position: absolute;
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 170px;
  height: 182px;
  display: ${(props) => (props.display ? "grid" : "none")};
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  right: 10%;
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
`;
export const ListFilters = styled.li`
  list-style: none;
  width: auto;
  margin: 0px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #373737;
`;