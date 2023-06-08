import Mockman from "mockman-js";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./Features/Home/Home";
import "./utils.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
