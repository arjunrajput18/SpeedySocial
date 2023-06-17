import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getPostData, getUserData } from "../Services/DataServices";
import { useReducer } from "react";
import { DataReducer, initialState } from "../Reducers/DataReducer";
import { useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [dataState,dataDispatch]=useReducer(DataReducer,initialState)
    const [userSearch, setUserSearch] = useState("")

   useEffect(()=>{
    getPostData(dataDispatch)
    getUserData(dataDispatch)
   },[])
  return <DataContext.Provider value={{dataState,dataDispatch,userSearch,setUserSearch}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
