import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Home page content</p>
      <Link to={"/about"}>About</Link>
      <div className="searchbar">
        <Searchbar />
      </div>
    </div>
  );
}
