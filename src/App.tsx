import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Greeting from "./pages/Greeting";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header className="app-header">
          <Link to='/' className="app-header__title">
            SIGNUP FORM
          </Link>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/greeting" element={<Greeting/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
