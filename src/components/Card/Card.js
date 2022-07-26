import { formatCurrency } from "../../utils";
import classes from "./Card.module.css";
export default function Card({ name, year, price, thumbnail }) {
  return (
    <section className={classes.container}>
      <h4 className={classes.name}>{name}</h4>
      <span className={classes.year_price}>{`${year} | $${formatCurrency(
        price
      )}`}</span>
      <img src={thumbnail} alt={name} className={classes.thumbnail} />
    </section>
  );
}
