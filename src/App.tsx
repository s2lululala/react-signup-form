import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Greeting from "./pages/Greeting";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header>
          <Link to='/'>
            <div>
              SIGNUP FORM
            </div>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/greeting" element={<Greeting/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
