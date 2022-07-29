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
export default function DropdownMenu() {
  return (
    <MenuContainer>
      <Header>
        <span>Cerrar</span>
        <Close />
      </Header>
      <Content>
        <List>
          <Item>Modelos</Item>
          <Item>Servicios y Accesorios</Item>
          <Item>Financiación</Item>
          <Item>Reviews y Comunidad</Item>
        </List>
        <Hr />
        <List>
          <Item>Toyota Mobility Service</Item>
          <Item>Toyota Gazoo Racing</Item>
          <Item>Toyota Híbridos</Item>
        </List>
        <Hr />
        <List>
          <Item>Concesionarios</Item>
          <Item>Test Drive</Item>
          <Item>Contacto</Item>
        </List>
      </Content>
      <ExtraContent>
        <List>
          <Item>Actividades</Item>
          <Item>Servicios al Cliente</Item>
          <Item>Ventas Especiales</Item>
          <Item>Innovación</Item>
          <Item>Prensa</Item>
          <Item>Acerca de...</Item>
        </List>
      </ExtraContent>
    </MenuContainer>
  );
}
