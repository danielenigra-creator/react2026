function SearchBar({ searchTerm, setSearchTerm }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca il tuo film"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
