import { Dispatch, SetStateAction } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import Icon from "../icon/icon.component";
import { SearchBarContainer, SearchBarIconContainer, SearchBarInput } from "./searchBar.styles";

interface SearchBarProps {
  placeholder: string
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  width?: string
}

const SearchBar = ({ placeholder, searchValue, setSearchValue, width = "350px" }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchBarInput
        placeholder={placeholder}
        width={width}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <SearchBarIconContainer>
        {searchValue ?
          <Icon
            IconComponent={FaXmark}
            width="20px"
            height="20px"
            onClick={() => setSearchValue("")}
            style={{ cursor: "pointer" }}
          />
        :
          <Icon
            IconComponent={FaMagnifyingGlass}
            width="20px"
            height="20px"
            style={{ pointerEvents: "none" }}
          />
        }
      </SearchBarIconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
