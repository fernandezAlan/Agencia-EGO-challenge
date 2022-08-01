export const getAllModels = async () => {
  const data = await fetch("https://challenge.agenciaego.tech/api/models/");
  const response = await data.json();
  return response;
};

export const getModelDetails = async (id) => {
  const data = await fetch(
    `https://challenge.agenciaego.tech/api/models/${id}/`
  );
  const response = await data.json();
  return response;
};

export const getAllModelsDetails = (allIds) => {
  const promises = allIds.map((id) => getModelDetails(id));
  return Promise.all(promises);
};
