import { useEffect, useState } from "react";
import { getModelDetails } from "../../services/vehicleModels";
import MenuIcon from "../../components/Icons/Menu";
import Logo from "../../components/Icons/Logo";
import ModelDetails from "../../components/ModelDetails/ModelDetails";
import AllModels from "../../components/AllModels/AllModels";
import useVehicleModels from "../../hooks/useVehicleModels";
import {
  PrincipalMain,
  Header,
  ButtonWrap,
  ButtonNavigation,
  Menu,
  Footer,
  LogoContainer,
  TitleMenu,
} from "./styles";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

export default function Home() {
  // ---- ENUMS-----------
  const VIEWS = {
    MODELS: 1,
    SELECTED_MODEL: 2,
  };

  // ----------- USE STATE ------------------
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedView, setSelectedView] = useState(VIEWS.MODELS);
  const [modelDetails, setModelDetail] = useState(null);
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const { models, filterModelsBySegment, orderBy, isLoading } =
    useVehicleModels();
  // -------------USE EFFECTS ---------------
  const openMenu = () => {
    setDisplayDropdownMenu(true);
  };
  const closeMenu = () => {
    setDisplayDropdownMenu(false);
  };
  useEffect(() => {
    setSelectedModel(models[0]);
  }, [models]);

  const goToModelDetails = () => {
    setModelDetail(null);
    setSelectedView(VIEWS.SELECTED_MODEL);
    getModelDetails(selectedModel.id).then(setModelDetail);
  };
  return (
    <PrincipalMain>
      <Header>
        <LogoContainer onClick={() => setSelectedView(VIEWS.MODELS)}>
          <Logo />
        </LogoContainer>
        <ButtonWrap>
          <ButtonNavigation
            active={selectedView === VIEWS.MODELS}
            onClick={() => setSelectedView(VIEWS.MODELS)}
          >
            Modelos
          </ButtonNavigation>
          <ButtonNavigation
            active={selectedView === VIEWS.SELECTED_MODEL}
            onClick={goToModelDetails}
          >
            Ficha de modelo
          </ButtonNavigation>
        </ButtonWrap>
        <Menu onClick={openMenu}>
          <TitleMenu>menú</TitleMenu> <MenuIcon />
        </Menu>
      </Header>
      {displayDropdownMenu && <DropdownMenu closeMenu={closeMenu} />}
      {selectedView === VIEWS.SELECTED_MODEL ? (
        <ModelDetails details={modelDetails} />
      ) : (
        <AllModels
          isLoading={isLoading}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          models={models}
          goToModelDetails={goToModelDetails}
          filterModelsBySegment={filterModelsBySegment}
          orderBy={orderBy}
        />
      )}

      <Footer></Footer>
    </PrincipalMain>
  );
}
