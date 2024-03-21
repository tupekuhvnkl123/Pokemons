import { useState } from "react";

const PokemonItem = ({ data, lastPokemonRef, index, length }) => {
  const [flipCard, setFlipCard] = useState(false);
  const { name, image, types, stats, gif } = data;
  return (
    <div
      // ref={index === length - 1 ? lastPokemonRef : null}
      onClick={() => setFlipCard((p) => !p)}
      className="h-72 w-[220px] cursor-pointer group perspective"
    >
      <div
        className={`rounded-lg relative preserve-3d ${
          flipCard && "my-rotate-y-180"
        } w-full h-full duration-1000 bg-secondary_color shadow-md`}
      >
        <div className="rounded-lg absolute backface-hidden w-full h-full flex flex-col items-center justify-center gap-y-5 overflow-hidden">
          <img className="h-[130px] z-10" src={image} alt={name} />
          <p className="text-[21px] z-10">{name}</p>
          <div className="flex items-center justify-center gap-x-2 z-10">
            {types.map((type) => (
              <p
                className="bg-[#1976d2] text-white px-2 rounded-lg "
                key={type}
              >
                {type}
              </p>
            ))}
          </div>
          <img
            className="absolute h-full w-full top-0 left-0 scale-[350%] object-cover blur-[45px] z-0"
            src={image}
            alt={name}
          />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden flex flex-col items-center justify-end gap-y-3 pb-4">
          <img className="max-h-[100px]" src={gif} alt={name} />
          <div className="flex flex-col items-center text-center justify-center">
            {stats.map((stat) => (
              <p className="text-sm" key={stat.name}>
                {stat.name} : {stat.value}
              </p>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-[#C12026] text-white py-1 px-3 rounded-md hover:scale-105 transition text-sm"
          >
            Explore {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
