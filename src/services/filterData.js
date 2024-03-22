export const filterData = (data, searchValue, searchBy) => {
  const isSearching = searchValue.trim().length !== 0;

  const modifiedData = data?.pages.map((page) =>
    page.filter((data) => {
      const { name, id, types } = data;
      if (!isSearching) return data;

      if (searchBy === "id") return id.toString() === searchValue && data;

      if (searchBy === "name")
        return name.toLowerCase().includes(searchValue.toLowerCase()) && data;

      if (searchBy === "type")
        return types.includes(searchValue.toLowerCase()) && data;
    })
  );

  return modifiedData;
};
