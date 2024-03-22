import { Snackbar } from "@mui/material";
import { useQuery } from "react-query";
import PokemonDetailsTemplate from "../components/Pages/PokemonDetails/PokemonDetailsTemplate";
import { fetchPokemonDetails } from "../services/fetchPokemonDetails";
import { useParams } from "react-router-dom";

const ERROR_MESSAGE = "Could not fetch data, please try to refresh.";

const PokemonDetails = () => {
  const { pokemon } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [pokemon],
    queryFn: () => fetchPokemonDetails(pokemon),
  });

  return (
    <>
      <PokemonDetailsTemplate data={data} isLoading={isLoading} />
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={5000}
          message={ERROR_MESSAGE}
        />
      )}
    </>
  );
};

export default PokemonDetails;
