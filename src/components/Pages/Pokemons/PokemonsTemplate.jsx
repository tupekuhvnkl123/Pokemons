import Preview from "./Preview";
import Search from "./Search";
import PokemonsList from "./PokemonsList";
import { useState } from "react";
import { filterData } from "../../../services/filterData";

const PokemonsTemplate = ({
  data,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}) => {
  const [searchBy, setSearchBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const isSearching = searchValue.trim().length !== 0;

  const filteredData = filterData(data, searchValue, searchBy);

  // const filteredData = data?.pages.map((page) =>
  //   page.filter((data) => {
  //     if (searchBy === "id") {
  //       if (data.id.toString() === searchValue) {
  //         return data;
  //       }
  //     }
  //     if (searchBy === "name") {
  //       if (data.name.includes(searchValue)) {
  //         return data;
  //       }
  //     }
  //     if (searchBy === "type") {
  //       if (data.types.includes(searchValue)) {
  //         return data;
  //       }
  //     }
  //     if (!isSearching) {
  //       return data;
  //     }
  //   })
  // );

  return (
    <main className="pageContainer">
      <Preview />
      <Search
        setSearchBy={setSearchBy}
        searchBy={searchBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <PokemonsList data={filteredData} isLoading={isLoading} />

      {hasNextPage && !isSearching && (
        <div className="w-full flexCenter">
          <button
            className=" bg-primary_color text-white py-2 px-4 rounded-lg hover:scale-105 transition"
            onClick={fetchNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </main>
  );
};

export default PokemonsTemplate;
