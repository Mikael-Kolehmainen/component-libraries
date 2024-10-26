import { ChangeEvent } from "react";
import { FaChevronDown } from "react-icons/fa";
import Dictionary from "../../types/Dictionary";
import Icon from "../icon/icon.component";
import { StyledSelect, StyledOption, DropdownContainer, DropdownIconContainer } from "./dropdown.styles";

interface DropdownProps {
  options: Dictionary<string, string>
  selectedOptionKey: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown = ({ options, selectedOptionKey, onChange }: DropdownProps) => {
  return (
    <DropdownContainer>
      <StyledSelect onChange={(event) => onChange(event)} value={selectedOptionKey}>
        {Object.keys(options).map((optionKey, i) => {
          return (
            <StyledOption key={i} value={optionKey}>
              {options[optionKey]}
            </StyledOption>
          )
        })}
      </StyledSelect>
      <DropdownIconContainer>
        <Icon width="15px" height="15px" color="#f3f4f6" IconComponent={FaChevronDown} />
      </DropdownIconContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
