import { useState } from "react";
import PokemonsTemplate from "../components/Pages/Pokemons/PokemonsTemplate";
import { fetchPokemons } from "../services/fetchPokemons";
import { Snackbar } from "@mui/material";
import { useInfiniteQuery } from "react-query";

const ERROR_MESSAGE = "Could not fetch data, please try to refresh.";

const Pokemons = () => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemons"],
      queryFn: fetchPokemons,
      getNextPageParam: (data, allPages) => {
        if (!hasNextPage) return;
        if (!data.length) {
          setHasNextPage(false);
          setShowSnackbar(true);
        }
        return allPages.length * 20;
      },
    });

  return (
    <>
      <PokemonsTemplate
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        data={data}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
      />
      {isError ||
        (!hasNextPage && showSnackbar && (
          <Snackbar
            open={isError || (!hasNextPage && showSnackbar)}
            autoHideDuration={3000}
            onClose={() => setShowSnackbar(false)}
            message={!hasNextPage ? "No more pokemons" : ERROR_MESSAGE}
          />
        ))}
    </>
  );
};

export default Pokemons;
