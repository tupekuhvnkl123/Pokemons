import React from "react";
import Skeleton from "react-loading-skeleton";
import PokemonCard from "./PokemonCard/PokemonCard";

const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];

const PokemonsList = ({ isLoading, data }) => {
  const emptyData = data && data.every((page) => page.length === 0);

  if (emptyData) {
    return (
      <div className="flexCenter">
        <p className="bg-secondary_color py-5 px-10 rounded-md">
          No pokemons found...
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-auto pb-20 gap-x-[50px] gap-y-[40px] px-20 place-items-center smPhone:px-0">
      {isLoading &&
        skeletonItems.map((num) => (
          <Skeleton className="h-72  w-[220px]" key={num} />
        ))}
      {data &&
        data.length &&
        data.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((pokemon, index) => (
              <PokemonCard
                key={pokemon.id}
                data={pokemon}
                index={index}
                length={page.length}
              />
            ))}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default PokemonsList;
