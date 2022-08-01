import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 9vw 80vw 9vw;
  grid-template-rows: 90vh 100vh 70vh;
  grid-template-areas:
    ". intro ."
    "slider slider slider"
    ". features .";
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

export const Intro = styled.section`
  grid-area: intro;
  height: auto;
  column-gap: 30px;
  display: grid;
  grid-template-columns: 55% 45%;
  @media screen and (max-width: 600px) {
    display: block;
    padding: 0px 15px;
    margin-bottom: 80px;
  }
`;

export const IntroIMG = styled.img`
  width: 600px;
  object-fit: contain;
  transform: scaleX(-1);
  align-self: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
  @media screen and (max-width: 600px) {
    font-size: 35px;
    color: #191919;
  }
`;

export const Slider = styled.section`
  grid-area: slider;
  display: flex;
  column-gap: 20px;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    overflow-x: scroll;
    margin-bottom: 70px;
    align-items: start;
  }
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4a4a4a;
    border-radius: 20px;
    margin: 10px;
  }
`;

export const FeaturesContainer = styled.section`
  grid-area: features;
  row-gap: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 16px;
    font-weight: 400;
    color: #373737;
  }
`;
