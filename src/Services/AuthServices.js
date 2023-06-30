import axios from "axios";
import { toast } from "react-toastify";

export const loginUser = async (creds, navigate, setIsLoggedIn) => {
  try {
    const {
      status,
      data: { encodedToken, foundUser },
    } = await axios.post("/api/auth/login", {
      ...creds,
    });
    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(foundUser));
      setIsLoggedIn(true);
      navigate("/");
      toast.success("Login successful!");
    }
  } catch (error) {
    toast.warn(
      "Sorry, your password was incorrect. Please double-check your password."
    );
  }
};

export const signupUser = async (
  data,
  navigate,
  setIsLoggedIn,
  dataDispatch
) => {
  try {
    const {
      status,
      data: { encodedToken, createdUser },
    } = await axios.post("/api/auth/signup", { ...data });
    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(createdUser));
      setIsLoggedIn(true);
      dataDispatch({ type: "Add_NEW_USER", payload: createdUser });
      navigate("/");
      toast.success("Signup successful!");
    }
  } catch (error) {
    toast.warn("Please used Another user Name or Email");
  }
};
