export function SearchInput() {
  return (
    <form className="search-input">
      <label htmlFor="location">Location</label>
      <input type="text" name="location" id="location" placeholder="Sydney" />
      <input type="submit" value="Search"/>
    </form>
  );
}
