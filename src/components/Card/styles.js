import styled from "styled-components";

export const ButtonModel = styled.button`
  font-family: "ToyotaType-Regular";
  background-color: #191919;
  color: white;
  font-size: 13px;
  width: 152px;
  height: 34px;
  border-radius: 40px;
  border: 0px;
  &:hover {
    background-color: #272727;
  }
`;

export const Name = styled.h4`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin: 5px 0px;
  color: ${(props) => (props.selected ? "#EB0A1E" : "#000000")};
`;

export const YearPrice = styled.span`
  color: #191919;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const ThumbnailImg = styled.img`
  width: 247px;
  height: 122px;
  object-fit: cover;
`;

export const ModelContainer = styled.section`
  width: 262px;
  height: 218px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-self: center;
  }
`;
