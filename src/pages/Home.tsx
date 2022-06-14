import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return(
    <div className="home">
      <div className="home__title">
        Welcome!
      </div>
      <div className="home__link">
        <Link to="signup" className="home__link__text">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Home;