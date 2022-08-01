import styled from "styled-components";

export const Strong = styled.strong`
  margin: 0px 3px;
`;

export const Button = styled.button`
  background-color: transparent;
  width: ${(props) => (props.width ? props.width : "auto")};
  border: 0px;
`;

export const DropdownContainer = styled.div`
  background: #ffffff;
  box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: 182px;
  display: ${(props) => (props.display ? "grid" : "none")};
  grid-template-rows: ${(props) => `repeat(${props.itemsNumber},1fr)`};
`;

export const ItemDropdown = styled(Button)`
  border-bottom: solid 1px #d8d8d8;
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0px;
  padding-left: 18px;
  height: 37px;
  &:last-child {
    border: 0px;
  }
`;
export const LoaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;
