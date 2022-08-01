import classes from "./loader.module.css";
export default function Loader() {
  return (
    <>
      <div className={classes["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
