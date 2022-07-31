import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 9vw 80vw 9vw;
  grid-template-rows: 90vh 100vh 70vh;
  grid-template-areas:
    ". intro ."
    "slider slider slider"
    ". features .";
`;

export const Intro = styled.section`
  grid-area: intro;
  height: auto;
  column-gap: 30px;
  display: grid;
  grid-template-columns: 55% 45%;
`;

export const IntroIMG = styled.img`
  width: 600px;
  object-fit: contain;
  transform: scaleX(-1);
  align-self: center;
`;

export const ModelName = styled.h2`
  color: #373737;
  font-size: 20px;
  font-weight: 600;
  margin: 0px;
`;

export const Title = styled.h1`
  color: #373737;
  font-weight: 600;
  font-size: 50px;
  margin: 0px;
`;

export const Slider = styled.section`
  grid-area: slider;
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

export const FeaturesContainer = styled.section`
  grid-area: features;
  row-gap: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
