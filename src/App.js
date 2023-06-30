import Mockman from "mockman-js";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./Features/Home/Home";
import "./utils.css";
import { MainContainer } from "./Components/MainContainer/MainContainer";

import "react-toastify/dist/ReactToastify.css";

import { Profile } from "./Features/Profile/Profile";
import { Explore } from "./Features/Explore/Explore";
import { Bookmark } from "./Features/Bookmark/Bookmark";
import { Login } from "./Features/Login/Login";
import { Signup } from "./Features/Login/Signup";
import { AnyProfile } from "./Features/Profile/AnyProfile";
import { PageNotFound } from "./Features/PageNotFound/PageNotFound";

import { PostDetails } from "./Features/PostDetails/PostDetails";
import { ToastContainer } from "react-toastify";
import { Loader } from "./Components/Loader/Loader";
import { useData } from "./Context/DataContext";

function App() {
  const { isLoading } = useData();

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1200}
        reverseOrder={false}
      />
      {isLoading && <Loader />}
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Home />
            </MainContainer>
          }
        />
        <Route
          path="/explore"
          element={
            <MainContainer>
              <Explore />
            </MainContainer>
          }
        />
        <Route
          path="/bookmark"
          element={
            <MainContainer>
              <Bookmark />
            </MainContainer>
          }
        />
        <Route
          path="/profile"
          element={
            <MainContainer>
              <Profile />
            </MainContainer>
          }
        />
        <Route
          path="/post/:_id"
          element={
            <MainContainer>
              <PostDetails />
            </MainContainer>
          }
        />
        <Route
          path="/profile/:userHandler"
          element={
            <MainContainer>
              <AnyProfile />
            </MainContainer>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
