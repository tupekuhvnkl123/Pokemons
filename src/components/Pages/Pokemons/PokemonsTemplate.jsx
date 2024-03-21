import Preview from "./Preview";
import Search from "./Search";
import PokemonsList from "./PokemonsList";

const PokemonsTemplate = ({
  data,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
  // lastPokemonRef,
}) => {
  return (
    <main className="pageContainer">
      <Preview />
      <Search />
      <PokemonsList
        data={data}
        isLoading={isLoading}
        // lastPokemonRef={lastPokemonRef}
      />

      <div className="w-full flex item-center justify-center">
        <button
          className=" bg-primary_color text-white py-2 px-4 rounded-lg hover:scale-105"
          onClick={fetchNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      </div>
    </main>
  );
};

export default PokemonsTemplate;
