import { Link } from "react-router-dom";
import './Greeting.css';

const Greeting = () => {
  return(
    <div className="greeting">
      <div className="greeting__title">
        Have a nice day!
      </div>
      <div className="greeting__link">
        <Link to="/" className="greeting__link__text">
          Home
        </Link>
      </div>

    </div>
  )
}

export default Greeting;