import {
  DetailsContainer,
  Intro,
  Slider,
  FeaturesContainer,
  IntroIMG,
  ModelName,
  Title,
} from "./styles";
import Highlight from "../Highlight/Highlight";
import Features from "../Features/Features";
export default function ModelDetails({ details }) {
  return (
    <DetailsContainer>
      <Intro>
        <IntroIMG src={details?.photo} />
        <div style={{ alignSelf: "center" }}>
          <ModelName>{details?.name}</ModelName>
          <Title>{details?.title}</Title>
          <p dangerouslySetInnerHTML={{ __html: details?.description }}></p>
        </div>
      </Intro>
      <Slider>
        {details?.model_highlights.map((highlight) => (
          <Highlight {...highlight} />
        ))}
      </Slider>
      <FeaturesContainer>
        {details?.model_features.map((features, index) => (
          <Features {...features} reverse={index % 2 === 0} />
        ))}
      </FeaturesContainer>
    </DetailsContainer>
  );
}
