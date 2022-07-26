export const getAllModels = async () => {
  const data = await fetch("https://challenge.agenciaego.tech/api/models/");
  const response = await data.json();
  return response;
};
