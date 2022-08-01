import {
  Nav,
  TitleOrderBy,
  FiltersContainer,
  FilterTitle,
  ListFilters,
  FiltersMobile,
  DropdownWrap,
} from "./styles";
import { Strong } from "../../style/StyledComponents";
import Dropdown from "../Icons/Dropdown";
import { DropdownContainer, ItemDropdown } from "../../style/StyledComponents";
import { useState } from "react";

export default function Filters({ filterModelsBySegment, orderBy }) {
  // useState para cambiar los estados de los dropdowns
  const [displayOrderBy, setDisplayOrderBy] = useState(false);
  const [displayFilterBy, setDisplayFilterBy] = useState(false);
  return (
    <>
      <Nav>
        <FiltersContainer>
          <FilterTitle>Filtrar por</FilterTitle>
          <ListFilters onClick={() => filterModelsBySegment("Todos")}>
            Todos
          </ListFilters>
          <ListFilters onClick={() => filterModelsBySegment("Autos")}>
            Autos
          </ListFilters>
          <ListFilters
            onClick={() => filterModelsBySegment("Pickups y Comerciales")}
          >
            Pickups y Comerciales
          </ListFilters>
          <ListFilters
            onClick={() => filterModelsBySegment("SUVs y Crossovers")}
          >
            SUVs y Crossovers
          </ListFilters>
        </FiltersContainer>
        <FiltersMobile onClick={() => setDisplayFilterBy(!displayFilterBy)}>
          Filtrar por
          <Dropdown />
        </FiltersMobile>
        <ul className="order_by">
          <TitleOrderBy onClick={() => setDisplayOrderBy(!displayOrderBy)}>
            Ordenar por
            <Dropdown />
          </TitleOrderBy>
        </ul>
      </Nav>
      <div style={{ position: "absolute" }}>
        <DropdownContainer
          itemsNumber={4}
          display={displayFilterBy}
          width={"160px"}
        >
          <ItemDropdown onClick={() => filterModelsBySegment("Todos")}>
            Todos
          </ItemDropdown>
          <ItemDropdown onClick={() => filterModelsBySegment("Autos")}>
            Autos
          </ItemDropdown>
          <ItemDropdown
            onClick={() => filterModelsBySegment("Pickups y Comerciales")}
          >
            Pickups y Comerciales
          </ItemDropdown>
          <ItemDropdown
            onClick={() => filterModelsBySegment("SUVs y Crossovers")}
          >
            SUVs y Crossovers
          </ItemDropdown>
        </DropdownContainer>
      </div>
      <DropdownWrap>
        <DropdownContainer
          itemsNumber={5}
          display={displayOrderBy}
          width={"160px"}
        >
          <ItemDropdown onClick={() => orderBy("nothing")}>Nada</ItemDropdown>
          <ItemDropdown onClick={() => orderBy("low-cost")}>
            De <Strong> menor </Strong> a <Strong> mayor </Strong>precio
          </ItemDropdown>
          <ItemDropdown onClick={() => orderBy("hight-cost")}>
            De <Strong> mayor </Strong> a <Strong> menor </Strong>precio
          </ItemDropdown>
          <ItemDropdown onClick={() => orderBy("newest")}>
            Más <Strong> nuevos </Strong> primero
          </ItemDropdown>
          <ItemDropdown onClick={() => orderBy("oldest")}>
            Más <Strong> viejos </Strong> primero
          </ItemDropdown>
        </DropdownContainer>
      </DropdownWrap>
      {/*
      <WrapOrderBy display={displayOrderBy}>
        <Button onClick={() => orderBy("nothing")}>
          <OrderByOption>Nada</OrderByOption>
        </Button>
        <Button>
          <OrderByOption onClick={() => orderBy("low-cost")}>
            De <strong> menor </strong> a <strong> mayor </strong>precio
          </OrderByOption>
        </Button>
        <Button>
          <OrderByOption onClick={() => orderBy("hight-cost")}>
            De <strong> mayor </strong> a <strong> menor </strong>precio
          </OrderByOption>
        </Button>
        <Button>
          <OrderByOption onClick={() => orderBy("newest")}>
            Más <strong> nuevos </strong> primero
          </OrderByOption>
        </Button>
        <Button>
          <OrderByOption onClick={() => orderBy("oldest")}>
            Más <strong> viejos </strong> primero
          </OrderByOption>
        </Button>
      </WrapOrderBy>
      */}
    </>
  );
}
