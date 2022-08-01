import {
  MenuContainer,
  Header,
  List,
  Item,
  Hr,
  Content,
  ExtraContent,
} from "./styles";
import Close from "../Icons/Close";
import { Button } from "../../style/StyledComponents";
export default function DropdownMenu({ closeMenu }) {
  return (
    <MenuContainer>
      <Header>
        <Button onClick={closeMenu}>
          <span>Cerrar</span>
        </Button>
        <Close onClick={closeMenu} />
      </Header>
      <Content>
        <List>
          <Button>
            {" "}
            <Item>Modelos</Item>
          </Button>
          <Button>
            <Item>Servicios y Accesorios</Item>
          </Button>
          <Button>
            <Item>Financiación</Item>
          </Button>
          <Button>
            <Item>Reviews y Comunidad</Item>
          </Button>
        </List>
        <Hr />
        <List>
          <Button>
            <Item>Toyota Mobility Service</Item>
          </Button>
          <Button>
            <Item>Toyota Gazoo Racing</Item>
          </Button>
          <Button>
            <Item>Toyota Híbridos</Item>
          </Button>
        </List>
        <Hr />
        <List>
          <Button>
            {" "}
            <Item>Concesionarios</Item>
          </Button>
          <Button>
            {" "}
            <Item>Test Drive</Item>
          </Button>
          <Button>
            {" "}
            <Item>Contacto</Item>
          </Button>
        </List>
      </Content>
      <ExtraContent>
        <List>
          <Button>
            <Item>Actividades</Item>
          </Button>
          <Button>
            <Item>Servicios al Cliente</Item>
          </Button>
          <Button>
            <Item>Ventas Especiales</Item>
          </Button>
          <Button>
            <Item>Innovación</Item>
          </Button>
          <Button>
            <Item>Prensa</Item>
          </Button>
          <Button>
            <Item>Acerca de...</Item>
          </Button>
        </List>
      </ExtraContent>
    </MenuContainer>
  );
}
