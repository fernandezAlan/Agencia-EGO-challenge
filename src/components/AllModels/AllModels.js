import Card from "../Card/Card";
import { Content, PrincipalTitle, GridModels } from "./styles";
import { LoaderContainer } from "../../style/StyledComponents";
import Filters from "../Filters/Filters";
import Loader from "../Loader/Loader";
export default function AllModels({
  selectedModel,
  setSelectedModel,
  models,
  goToModelDetails,
  filterModelsBySegment,
  orderBy,
  isLoading,
}) {
  if (isLoading)
    return (
      <LoaderContainer>
        <Loader />;
      </LoaderContainer>
    );
  return (
    <Content>
      <PrincipalTitle>Descubrí todos los modelos</PrincipalTitle>
      <Filters
        filterModelsBySegment={filterModelsBySegment}
        orderBy={orderBy}
      />
      <GridModels>
        {models.map((model) => (
          <Card
            key={model.name}
            name={model.name}
            year={model.year}
            thumbnail={model.thumbnail}
            price={model.price}
            selected={selectedModel?.id === model.id}
            onClick={() => setSelectedModel(model)}
            goToModelDetails={goToModelDetails}
          />
        ))}
      </GridModels>
    </Content>
  );
}
