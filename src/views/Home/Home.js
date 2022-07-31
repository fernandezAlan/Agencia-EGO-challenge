import { useEffect, useState } from "react";
import { getAllModels, getModelDetails } from "../../services/vehicleModels";
import MenuIcon from "../../components/Icons/Menu";
import Logo from "../../components/Icons/Logo";
import ModelDetails from "../../components/ModelDetails/ModelDetails";
import AllModels from "../../components/AllModels/AllModels";
import {
  PrincipalMain,
  Header,
  ButtonWrap,
  ButtonNavigation,
  Menu,
  Footer,
  LogoContainer,
} from "./styles";
// import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

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
  const [models, setModels] = useState([]);

  // -------------USE EFFECTS ---------------
  useEffect(() => {
    getAllModels().then(setModels);
  }, []);

  useEffect(() => {
    setSelectedModel(models[0]);
  }, [models]);

  useEffect(() => {
    console.log("modelDetails", modelDetails);
  }, [modelDetails]);

  return (
    <PrincipalMain>
      {/*<DropdownMenu />*/}
      <Header>
        <LogoContainer>
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
            onClick={() => {
              setSelectedView(VIEWS.SELECTED_MODEL);
              getModelDetails(selectedModel.id).then(setModelDetail);
            }}
          >
            Ficha de modelo
          </ButtonNavigation>
        </ButtonWrap>
        <Menu>
          menú <MenuIcon />
        </Menu>
      </Header>
      {selectedView === VIEWS.SELECTED_MODEL ? (
        <ModelDetails details={modelDetails}/>
      ) : (
        <AllModels
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          models={models}
        />
      )}

      <Footer></Footer>
    </PrincipalMain>
  );
}
