import { useEffect, useState } from "react";
import { FaHouse } from "react-icons/fa6";
import Icon from "../../components/icon/icon.component";
import { Container } from "./home.styles";

const Home = () => {
  return (
    <section>
      <h1>Collection of components</h1>
      <h2>Icons</h2>
      <Container>
        <Icon IconComponent={FaHouse} iconPath="/icons/house-solid.svg" />
      </Container>
    </section>
  );
};

export default Home;
