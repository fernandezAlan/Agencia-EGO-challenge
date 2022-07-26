import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getAllModels } from "../../services/vehicleModels";
import "./Home.css";
export default function Home() {
  const [models, setModels] = useState([]);
  useEffect(() => {
    getAllModels().then(setModels);
  }, []);
  return (
    <main>
      <header>
        <div>
          <button>Modelos</button>
          <button>Ficha de modelo</button>
        </div>
        <nav>menú</nav>
      </header>
      <section>
        <h1>Descubrí todos los modelos</h1>
        <nav>
          <ul>
            <span>Filtrar por</span>
            <li>Todos</li>
            <li>Autos</li>
            <li>Pickups y comerciales</li>
            <li>SUVs y Crossovers</li>
          </ul>
          <ul>
            <span>Ordenar por</span>
          </ul>
        </nav>
        <section>
          {models.map((model) => (
            <Card
              name={model.name}
              year={model.year}
              thumbnail={model.thumbnail}
              price={model.price}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
