import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #d8d8d8;
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

export const OrderByOption = styled.span`
  font-size: 10px;
  display: flex;
  column-gap: 3px;
  padding-left: 15px;
`;
export const TitleOrderBy = styled.span`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 14px;
  }
`;
export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #373737;
`;

export const ListFilters = styled.button`
  width: auto;
  margin: 0px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #373737;
  background-color: transparent;
  border: 0px;
`;
export const FiltersMobile = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const DropdownWrap = styled.div`
  position: absolute;
  right: 10%;
  @media screen and (max-width: 600px) {
    right: 0%;
  }
`;
