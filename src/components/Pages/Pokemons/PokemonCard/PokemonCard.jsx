import { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const PokemonCard = ({ data }) => {
  const [flipCard, setFlipCard] = useState(false);
  const { name, image, types, stats, gif } = data;
  return (
    <div
      onClick={() => setFlipCard((p) => !p)}
      className="h-72 w-[220px] cursor-pointer group perspective"
    >
      <div
        className={`rounded-lg relative preserve-3d ${
          flipCard && "my-rotate-y-180"
        } w-full h-full duration-1000 bg-secondary_color shadow-md`}
      >
        <FrontCard image={image} name={name} types={types} />
        <BackCard gif={gif} name={name} stats={stats} />
      </div>
    </div>
  );
};

export default PokemonCard;
