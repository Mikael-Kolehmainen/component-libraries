import { FaCog } from "react-icons/fa";
import { FaHouse, FaUser } from "react-icons/fa6";
import Icon from "../../components/icon/icon.component";
import { Container } from "./home.styles";

const Home = () => {
  return (
    <section>
      <h1>Collection of components</h1>
      <article>
        <h2>Icons</h2>
        <ul>
          <li>Colors are based on theme file.</li>
          <li>Uses <i>react-icons</i> npm package for the icons, they are stored locally, no CDN used.</li>
          <li>Width and height can be changed dynamically.</li>
        </ul>
        <p>Examples:</p>
        <Container>
          <Icon IconComponent={FaHouse} />
          <Icon IconComponent={FaUser} height="40px" width="40px" />
          <Icon IconComponent={FaCog} height="100px" width="100px" />
        </Container>
      </article>
    </section>
  );
};

export default Home;
