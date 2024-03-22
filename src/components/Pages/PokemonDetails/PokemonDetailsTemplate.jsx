import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
import Details from "./Details/Details";
import PokemonLoader from "../../UI/PokemonLoader";

const PokemonDetailsTemplate = ({ data, isLoading }) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    image,
    types,
    gif,
    stats,
    abilities,
    dimensions,
    experience,
    extraImages,
  } = data || {};

  return (
    <main className="pageContainer flex flex-col pt-20 px-[clamp(20px,10vw,350px)] gap-y-3 xl:px-[clamp(20px,3vw,100px)] pb-5">
      <div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-x-3 cursor-pointer hover:scale-105 transition"
        >
          <FaArrowLeft className="text-pokemon_red" />
          <p>Pokemons</p>
        </button>
      </div>
      {isLoading && (
        <div className="flexCenter pt-40">
          <PokemonLoader />
        </div>
      )}
      {data && (
        <div className="flex justify-center gap-x-[150px] xl:gap-x-[clamp(20px,8vw,100px)] phone:flex-col phone:items-center phone:gap-y-20 bg-secondary_color  shadow-md  phone:bg-transparent  phone:!shadow-none rounded-3xl py-20 phon">
          <Preview
            name={name}
            image={image}
            types={types}
            id={id}
            gif={gif}
            extraImages={extraImages}
          />
          <Details
            experience={experience}
            dimensions={dimensions}
            abilities={abilities}
            stats={stats}
          />
        </div>
      )}
    </main>
  );
};

export default PokemonDetailsTemplate;
