import { Link } from "react-router-dom";

const Home = () => {
  return(
    <>
      <h1>Welcome!</h1>
      <Link to="signup">Sign Up</Link>
    </>
  )
}

export default Home;