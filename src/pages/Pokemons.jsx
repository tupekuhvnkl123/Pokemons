// import { useQuery } from "react-query";
import { useCallback, useRef } from "react";
import PokemonsTemplate from "../components/Pages/Pokemons/PokemonsTemplate";
import { fetchPokemons } from "../services/fetchPokemons";
import { Snackbar } from "@mui/material";
import { useInfiniteQuery } from "react-query";

const Pokemons = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("pokemons", fetchPokemons, {
    getNextPageParam: (data, allPages) => allPages.length * 20,
  });

  const errorMessage = "Could not fetch data, please try to refresh.";

  const observer = useRef();

  // const lastPokemonRef = useCallback(
  //   (node) => {
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
  //         fetchNextPage();
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [hasNextPage, isFetchingNextPage, fetchNextPage]
  // );
  // console.log(isFetchingNextPage);
  return (
    <>
      <PokemonsTemplate
        // lastPokemonRef={lastPokemonRef}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        data={data}
        isLoading={isLoading}
      />
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={5000}
          message={errorMessage}
        />
      )}
    </>
  );
};

export default Pokemons;
