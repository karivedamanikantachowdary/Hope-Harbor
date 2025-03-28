import {createContext,useContext} from "react";
import React,{useState,useEffect} from 'react';
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState('');
    const [isLoading,setIsLoading]=useState(true)
    const [foods,setFoods]=useState([]);
    const authorizationToken=`Bearer ${token}`;
    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken);
    };
   let isLoggedIn=!!token;
   console.log('isLoggedIn',isLoggedIn);
  const LogoutUser=()=>{
         setToken("");
         return localStorage.removeItem('token');
    };

  const userAuthentication=async()=>{
     try{
      setIsLoading(true);
        const response=await fetch("http://localhost:5000/api/auth/user",
        {
          method:"GET",
          headers:{
            Authorization:authorizationToken,
          },
        })
      if(response.ok)
      {
        const data=await response.json();
        console.log("userdata ",data.userData);
 
        setUser(data.userData);
        setIsLoading(false)
      }
      else{
        console.error("error fetching user data")
        setIsLoading(false)
      }
     }catch(error)
     {
      console.error("error fetching user data");
     }
  }

  const getFoods=async(req,res)=>{
    try{
      const response=await fetch("http://localhost:5000/api/data/donate/food",{
        method:"GET",
      })
      if(response.ok){
        const data=await response.json();
        console.log(data.msg)
        setFoods(data.msg)
      }
    }catch(error)
    {
      console.log(`foods frontend error: ${error}`);
    }
  }
  useEffect(()=>{
    getFoods();
    userAuthentication();
  },[])
  return (
  <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser,user,foods,authorizationToken,isLoading}}>
    {children}
    </AuthContext.Provider>
  );
};
export const useAuth=()=>{
    const AuthContextValue=useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return AuthContextValue;
}
