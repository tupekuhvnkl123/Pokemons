export const filterData = (data, searchValue, searchBy) => {
  const isSearching = searchValue.trim().length !== 0;

  const modifiedData = data?.pages.map((page) =>
    page.filter((data) => {
      if (!isSearching) return data;

      if (searchBy === "id") return data.id.toString() === searchValue && data;

      if (searchBy === "name") return data.name.includes(searchValue) && data;

      if (searchBy === "type") return data.types.includes(searchValue) && data;
    })
  );

  return modifiedData;
};
