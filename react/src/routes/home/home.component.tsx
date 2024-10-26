import { useState } from "react";
import { FaCog } from "react-icons/fa";
import { FaArrowRight, FaCheck, FaHouse, FaUser } from "react-icons/fa6";
import Icon from "../../components/icon/icon.component";
import { Container } from "./home.styles";
import Button from "../../components/button/button.component";
import Dropdown from "../../components/drodpown/dropdown.component";
import Dictionary from "../../types/Dictionary";
import SearchBar from "../../components/searchBar/searchBar.component";
import { Customer } from "../../interfaces/Customer";
import Table from "../../components/table/table.component";

const Home = () => {
  // Dropdown stuff
  const fruits = {
    apple: "Apple",
    orange: "Orange",
    banana: "Banana",
    watermelon: "Watermelon"
  } as Dictionary<string, string>;
  const [selectedFruit, setSelectedFruit] = useState<keyof typeof fruits>(Object.keys(fruits)[0]);

  // searchBar stuff
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const customers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@domain.com",
      phoneNumber: "+358401234567"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@domain.com",
      phoneNumber: null,
    },
    {
      id: 3,
      firstName: "Matti",
      lastName: "Meikäläinen",
      email: null,
      phoneNumber: null,
    }
  ] as Customer[];
  const tableColumnNames = ["ID", "First Name", "Last Name", "Email", "Phone Number"];

  return (
    <section>
      <h1>Collection of components</h1>
      <article>
        <h2>Icons</h2>
        <ul>
          <li>Colors are based on theme file.</li>
          <li>Uses <i>react-icons</i> npm package for the icons, they are stored locally, no CDN used.</li>
          <li>Width, height and color can be changed dynamically.</li>
        </ul>
        <p>Examples:</p>
        <Container>
          <Icon IconComponent={FaHouse} />
          <Icon IconComponent={FaUser} height="40px" width="40px" />
          <Icon IconComponent={FaCog} height="100px" width="100px" />
        </Container>
      </article>
      <article>
        <h2>Buttons</h2>
        <ul>
          <li>Colors are based on theme file.</li>
          <li>Both HTML buttons and links that look like buttons.</li>
        </ul>
        <p>Examples:</p>
        <Container>
          <Button onClick={() => window.alert("Clicked!")}>Click me</Button>
          <Button onClick={() => {}}>
            <Icon IconComponent={FaCheck} height="40px" width="40px" color="white" />
          </Button>
          <Button onClick={() => {}}>
            Proceed <Icon IconComponent={FaArrowRight} height="20px" width="20px" color="#f3f4f6" style={{ marginTop: "3px" }} />
          </Button>
        </Container>
      </article>
      <article>
        <h2>Dropdowns</h2>
        <ul>
          <li>Takes in a dictionary to map the options with displayed value and behind-the-scenes value.</li>
        </ul>
        <p>Examples:</p>
        <Container>
          <Dropdown
            options={fruits}
            selectedOptionKey={selectedFruit}
            onChange={(event) => setSelectedFruit(event.target.value)}
          />
          <p>Selected fruit: {fruits[selectedFruit]}</p>
        </Container>
      </article>
      <article>
        <h2>Search bar & table</h2>
        <ul>
          <li>Search from a table based on values in different columns.</li>
          <li>Table component takes in table data as an array of objects and column names as an array of strings.</li>
        </ul>
        <SearchBar
          placeholder="Search (ID, First Name, Last Name, Email, Phone Number)"
          searchValue={searchBarValue}
          setSearchValue={setSearchBarValue}
          width="450px"
        />
        <Table
          columnNames={tableColumnNames}
          tableData={customers}
        />
      </article>
    </section>
  );
};

export default Home;
