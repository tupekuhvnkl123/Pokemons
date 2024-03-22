import { IoMdSearch } from "react-icons/io";

const searchOptions = ["Name", "Type", "Id"];

const Search = ({ setSearchBy, searchBy, searchValue, setSearchValue }) => (
  <div className="w-full h-[200px] flex items-center justify-between px-20 xl:px-10 phone:flex-col phone:justify-center phone:gap-y-10 phone:!px-0 ">
    <div className="flex items-center justify-center font-bold gap-x-5">
      <p className="text-[20px] smPhone:text-[16px]">Search by : </p>
      <div className="flex items-center justify-center gap-x-3 smPhone:gap-x-0">
        {searchOptions.map((term) => {
          const isActive = searchBy === term.toLocaleLowerCase();
          return (
            <p
              className={`px-3 py-1 rounded-lg cursor-pointer smPhone:text-[13px] transition ${
                isActive && "bg-primary_color text-secondary_color"
              } ${!isActive && "hover:scale-105"}`}
              key={term}
              onClick={() => setSearchBy(term.toLowerCase())}
            >
              {term}
            </p>
          );
        })}
      </div>
    </div>
    <div className="flex items-center justify-center">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        id="first_name"
        className="h-[45px] border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block w-full p-2.5 min-w-[250px] focus:outline-none"
        placeholder={`Search pokemon by ${searchBy}`}
      />
      <div className="flex items-center py-[7px] px-[4px] h-full  bg-primary_color rounded-r-lg">
        <IoMdSearch className="text-3xl text-secondary_color" />
      </div>
    </div>
  </div>
);

export default Search;
