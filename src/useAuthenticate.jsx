import {  useContext  } from "react";
import AuthContext  from "./authContext";

// Custom hook to use AuthContext
 function useAuthenticate  (){
  return useContext(AuthContext);
};

export default useAuthenticate;