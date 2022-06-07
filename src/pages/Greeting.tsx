import { Link } from "react-router-dom";

const Greeting = () => {
  return(
    <>
      <h1>Have a nice day!</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default Greeting;