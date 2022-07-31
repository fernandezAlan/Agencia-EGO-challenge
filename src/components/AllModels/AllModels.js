import { useState } from "react";
import Card from "../Card/Card";
import {
  Content,
  PrincipalTitle,
  Nav,
  Filters,
  FilterTitle,
  ListFilters,
  WrapOrderBy,
  ListOrderBy,
  GridModels,
} from "./styles";
export default function AllModels({ selectedModel, setSelectedModel, models }) {
  const [displayOrderBy, setDisplayOrderBy] = useState(false);

  return (
    <Content>
      <PrincipalTitle>Descubrí todos los modelos</PrincipalTitle>
      <Nav>
        <Filters>
          <FilterTitle>Filtrar por</FilterTitle>
          <ListFilters>Todos</ListFilters>
          <ListFilters>Autos</ListFilters>
          <ListFilters>Pickups y comerciales</ListFilters>
          <ListFilters>SUVs y Crossovers</ListFilters>
        </Filters>
        <ul className="order_by">
          <span
            onClick={() => setDisplayOrderBy(!displayOrderBy)}
            style={{ cursor: "pointer" }}
          >
            Ordenar por
          </span>
          <WrapOrderBy display={displayOrderBy}>
            <ListOrderBy>Nada</ListOrderBy>
            <ListOrderBy>
              De <strong> menor </strong> a <strong> mayor </strong>precio
            </ListOrderBy>
            <ListOrderBy>
              De <strong> mayor </strong> a <strong> menor </strong>precio
            </ListOrderBy>
            <ListOrderBy>
              Más <strong> nuevos </strong> primero
            </ListOrderBy>
            <ListOrderBy>
              Más <strong> viejos </strong> primero
            </ListOrderBy>
          </WrapOrderBy>
        </ul>
      </Nav>
      <GridModels>
        {models.map((model) => (
          <Card
            name={model.name}
            year={model.year}
            thumbnail={model.thumbnail}
            price={model.price}
            selected={selectedModel?.id === model.id}
            onClick={() => setSelectedModel(model)}
          />
        ))}
      </GridModels>
    </Content>
  );
}
