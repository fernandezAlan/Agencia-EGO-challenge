import {
  Container,
  Image,
  Name,
  DescriptionContainer,
  Description,
} from "./style";
export default function Features({ reverse, image, name, description }) {
  return (
    <Container reverse={reverse}>
      <Image src={image} />
      <DescriptionContainer reverse={reverse}>
        <Name>{name}</Name>
        <Description reverse={reverse}>{description}</Description>
      </DescriptionContainer>
    </Container>
  );
}
