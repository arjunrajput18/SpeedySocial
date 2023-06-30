import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getPostData, getUserData } from "../Services/DataServices";
import { useReducer } from "react";
import { DataReducer, initialState } from "../Reducers/DataReducer";
import { useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);
  const [userSearch, setUserSearch] = useState("");
  const [btnAddPost, setBtnAddPost] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);
  const [commentText, setCommentText] = useState();
  const [commentId, setCommentId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [editBtn, setEditBtn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    getPostData(dataDispatch, setIsLoading);
    getUserData(dataDispatch, setIsLoading);
  }, []);

  return (
    <DataContext.Provider
      value={{
        commentText,
        editBtn,
        setEditBtn,
        setCommentText,
        dataState,
        dataDispatch,
        userSearch,
        setUserSearch,
        btnAddPost,
        setBtnAddPost,
        setCommentToggle,
        commentToggle,
        commentId,
        setCommentId,
        isLoading,
        setIsLoading,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
