import styled from "styled-components";
export const PrincipalMain = styled.main`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 70px 95% 50px;
  grid-template-areas:
    "header header header"
    ". content ."
    "footer footer footer";
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  grid-area: header;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: ". nav menu";
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;
export const ButtonWrap = styled.div`
  grid-area: nav;
`;
export const ButtonNavigation = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => (props.active ? "#EB0A1E" : "#191919")};
  width: 150px;
  height: 66px;
  border-bottom: ${(props) => (props.active ? "solid 4px #D0021B" : "0px")};
`;
export const Menu = styled.nav`
  grid-area: menu;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const GridModels = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 218px 218px;
  column-gap: 20px;
  row-gap: 75px;
  margin-top: 50px;
`;

export const Content = styled.section`
  grid-area: content;
`;

export const PrincipalTitle = styled.h1`
  color: #373737;
  font-size: 50px;
  margin: 60px 0px;
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
export const ListFilters = styled.li`
  list-style: none;
  width: auto;
  margin: 0px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #373737;
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

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #000000;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
