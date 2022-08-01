import { useState, useEffect } from "react";
import { getAllModels, getAllModelsDetails } from "../services/vehicleModels";
export default function useVehicleModels() {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [modelsDetails, setModelsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(false);

  useEffect(() => {
    getAllModels().then((allModels) => {
      setModels(allModels);
      setFilteredModels(allModels);
      const ids = allModels.map((models) => models.id);
      getAllModelsDetails(ids).then(setModelsDetails);
      setIsLoading(false);
    });
  }, []);

  const filterBySegment = (segment) => {
    return models.filter(
      (model) => model.segment.toLowerCase() === segment.toLowerCase()
    );
  };
  const orderBy = (option) => {
    const sortedModels = [...filteredModels];
    switch (option) {
      case "low-cost":
        sortedModels.sort((a, b) => {
          return a.price - b.price;
        });
        setFilteredModels(sortedModels);
        break;
      case "hight-cost":
        sortedModels.sort((a, b) => {
          return b.price - a.price;
        });
        setFilteredModels(sortedModels);
        break;
      case "newest":
        sortedModels.sort((a, b) => {
          return a.year - b.year;
        });
        setFilteredModels(sortedModels);
        break;
      case "oldest":
        sortedModels.sort((a, b) => {
          return b.year - a.year;
        });
        setFilteredModels(sortedModels);
        break;
      case "nothing":
        setFilteredModels(models);
        break;
      default:
        break;
    }
  };
  const filterModelsBySegment = (segment) => {
    switch (segment) {
      case "Todos":
        setFilteredModels(models);
        break;
      case "Pickups y Comerciales":
        setFilteredModels(filterBySegment(segment));
        break;
      case "SUVs y Crossovers":
        setFilteredModels(filterBySegment("SUVs"));
        break;
      case "Autos":
        const hatchback = filterBySegment("Hatchback");
        const sedan = filterBySegment("Sedan");
        setFilteredModels(hatchback.concat(sedan));
        break;
      default:
        setFilteredModels(models);
        break;
    }
  };
  return {
    models: filteredModels,
    isLoading,
    modelsDetails,
    filterModelsBySegment,
    orderBy,
  };
}
