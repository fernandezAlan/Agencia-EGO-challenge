import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getAllModels } from "../../services/vehicleModels";
import MenuIcon from "../../components/Icons/Menu";
import Logo from "../../components/Icons/Logo";
import {
  PrincipalMain,
  Header,
  ButtonWrap,
  ButtonNavigation,
  Menu,
  GridModels,
  Content,
  PrincipalTitle,
  Filters,
  Nav,
  ListFilters,
  FilterTitle,
  WrapOrderBy,
  ListOrderBy,
  Footer,
  LogoContainer,
} from "./styles";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

export default function Home() {
  const [models, setModels] = useState([]);
  const [displayOrderBy, setDisplayOrderBy] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState(null);
  useEffect(() => {
    getAllModels().then(setModels);
  }, []);

  useEffect(() => {
    setSelectedModelId(models[0]?.id);
    console.log(models);
  }, [models]);

  return (
    <PrincipalMain>
      {/*<DropdownMenu />*/}
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ButtonWrap>
          <ButtonNavigation active>Modelos</ButtonNavigation>
          <ButtonNavigation>Ficha de modelo</ButtonNavigation>
        </ButtonWrap>
        <Menu>
          menú <MenuIcon />
        </Menu>
      </Header>
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
              selected={selectedModelId === model.id}
              onClick={() => setSelectedModelId(model.id)}
            />
          ))}
        </GridModels>
      </Content>
      <Footer></Footer>
    </PrincipalMain>
  );
}
