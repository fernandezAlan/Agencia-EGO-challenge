import styled from "styled-components";

export const Container = styled.article`
  display: grid;
  grid-template-columns: 270px 500px 270px;
  grid-template-areas: ${(props) =>
    props.reverse ? '". description  image"' : '"image description ."'};
`;
export const Image = styled.img`
  grid-area: image;
  width: 270px;
`;

export const DescriptionContainer = styled.div`
  grid-area: description;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  justify-self: center;
`;
export const Name = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.4px;
  color: #373737;
  margin: 0px;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #373737;
`;
