import { formatCurrency } from "../../utils";
import {
  ButtonModel,
  Name,
  YearPrice,
  ThumbnailImg,
  ModelContainer,
} from "./styles";

export default function Card({
  name,
  year,
  price,
  thumbnail,
  selected,
  onClick,
}) {
  return (
    <ModelContainer onClick={onClick}>
      <Name selected={selected}>{name}</Name>
      <YearPrice>{`${year} | $${formatCurrency(price)}`}</YearPrice>
      <ThumbnailImg src={thumbnail} alt={name} />
      {selected && <ButtonModel>Ver Modelo</ButtonModel>}
    </ModelContainer>
  );
}
