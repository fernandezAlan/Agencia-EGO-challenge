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
  font-weight: 600;
  color: ${(props) => (props.active ? "#EB0A1E" : "#191919")};
  width: 150px;
  height: 66px;
  border-bottom: ${(props) => (props.active ? "solid 4px #D0021B" : "0px")};
  &:hover {
    color: ${(props) => (props.active ? "#EB0A1E" : "#3c3c3c")};
  }
`;
export const Menu = styled.nav`
  grid-area: menu;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
