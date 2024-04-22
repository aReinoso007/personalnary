import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <p>Home page content</p>
      <Link to={"/about"}>About</Link>
      <div className="searchbar">
        <Searchbar />
      </div>
    </Container>
  );
}
