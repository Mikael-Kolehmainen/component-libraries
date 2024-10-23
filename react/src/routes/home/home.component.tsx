import { FaCog } from "react-icons/fa";
import { FaArrowRight, FaCheck, FaHouse, FaUser } from "react-icons/fa6";
import Icon from "../../components/icon/icon.component";
import { Container } from "./home.styles";
import Button from "../../components/button/button.component";

const Home = () => {
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
    </section>
  );
};

export default Home;
