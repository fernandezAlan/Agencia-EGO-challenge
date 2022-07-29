export const formatCurrency = (number) => {
  return new Intl.NumberFormat("es-ES").format(number);
};

export const toggleDisplayOrderBy = () => {
  const wrap = document.getElementById("order_by_wrap");
  const currentDisplay = wrap.style.display;
  if (currentDisplay === "none") wrap.style.display = "grid";
  else wrap.style.display = "none";
};
