import { Routes, Route } from "react-router-dom";
import Greeting from "./pages/Greeting";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/greeting" element={<Greeting/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
