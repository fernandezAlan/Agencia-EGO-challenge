import styled from "styled-components";
export const MenuContainer = styled.section`
  width: 390px;
  height: 851px;
  top: 0%;
  background-color: white;
  position: absolute;
  right: 0%;
  box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 337px 53px;
  grid-template-rows: 70px auto 296px;
  grid-template-areas:
    "header header"
    "content ."
    "extraContent extraContent";
  z-index: 2;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  padding-right: 27px;
  justify-content: end;
  column-gap: 10px;
  grid-area: header;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const Item = styled.li`
  font-size: 20px;
  list-style: none;
  font-weight: 400;
  margin: 10px 0px;
`;

export const Hr = styled.hr`
  position: relative;
  left: 40px;
  border: solid 1px #e9e9e9;
  &:last-child {
    border: solid 1px #d1d1d1;
  }
`;
export const Content = styled.div`
  grid-area: content;
`;
export const ExtraContent = styled.div`
  background-color: #efeeef;
  grid-area: extraContent;
  padding-right: 53px;
`;
