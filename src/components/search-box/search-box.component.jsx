import { SearchInput } from "./search-box.styles";

const SearchBox = ({ placeholder, onChangeHandler }) => (
  <SearchInput
    type="number"
    min="1"
    max="100"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
