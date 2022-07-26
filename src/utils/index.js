export const formatCurrency = (number) => {
  return new Intl.NumberFormat("es-ES").format(number);
};
