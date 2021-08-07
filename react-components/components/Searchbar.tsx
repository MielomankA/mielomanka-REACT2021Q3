export const Searchbar = () => {
  return (
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Search" />
      <button type="submit" className="searchButton">
        Search
      </button>
    </div>
  );
};
