import React from "react";
import PokemonItem from "./PokemonItem";
import Skeleton from "react-loading-skeleton";

const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];

const PokemonsList = ({ isLoading, data, lastPokemonRef }) => {
  return (
    <ul className="grid grid-cols-auto pb-20 gap-x-[50px] gap-y-[40px] px-20 place-items-center smPhone:px-0">
      {isLoading &&
        skeletonItems.map((num) => (
          <Skeleton className="h-72  w-[220px]" key={num} />
        ))}
      {data &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((pokemon, index) => (
              <PokemonItem
                key={pokemon.id}
                data={pokemon}
                // lastPokemonRef={lastPokemonRef}
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
