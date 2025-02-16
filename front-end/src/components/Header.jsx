import spotifyLogo from "../assets/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={spotifyLogo} alt="logo Spotify" />
      </Link>
      <h1><Link to="/">Spotify</Link></h1>
    </header>
  );
}

export default Header;