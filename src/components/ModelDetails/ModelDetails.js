import {
  DetailsContainer,
  Intro,
  Slider,
  FeaturesContainer,
  IntroIMG,
  ModelName,
  Title,
  Description,
} from "./styles";
import Highlight from "../Highlight/Highlight";
import Features from "../Features/Features";
import Loader from "../Loader/Loader";
import { LoaderContainer } from "../../style/StyledComponents";
export default function ModelDetails({ details }) {
  if (!details)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  return (
    <DetailsContainer>
      <Intro>
        <IntroIMG src={details?.photo} />
        <div style={{ alignSelf: "center" }}>
          <ModelName>{details?.name}</ModelName>
          <Title>{details?.title}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: details?.description }}
          ></Description>
        </div>
      </Intro>
      <Slider>
        {details?.model_highlights.map((highlight) => (
          <Highlight {...highlight} key={highlight.title} />
        ))}
      </Slider>
      <FeaturesContainer>
        {details?.model_features.map((features, index) => (
          <Features
            {...features}
            reverse={index % 2 === 0}
            key={features.name}
          />
        ))}
      </FeaturesContainer>
    </DetailsContainer>
  );
}
