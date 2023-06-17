import axios from "axios";

export const loginUser = async (creds, navigate,setIsLoggedIn) => {
  try {
    const {
      status,
      data: { encodedToken, foundUser },
    } = await axios.post("/api/auth/login", {
    ...creds
    });
    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(foundUser));
      setIsLoggedIn(true)
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const signupUser = async (data, navigate,setIsLoggedIn,dataDispatch) => {
  try {
    const {
      status,
      data: { encodedToken, createdUser },
    } = await axios.post("/api/auth/signup", { ...data });
    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(createdUser));
      setIsLoggedIn(true)
      dataDispatch({type:"Add_NEW_USER",payload:createdUser})
      navigate("/");

    }
  } catch (error) {
    console.log(error);
  }
};
