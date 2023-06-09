import Mockman from "mockman-js";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./Features/Home/Home";
import "./utils.css";
import { MainContainer } from "./Components/MainContainer/MainContainer";
import { Navbar } from "./Components/NavBar/Navbar";
import { MenuBar } from "./Components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MenuBar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Home />
            </MainContainer>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
