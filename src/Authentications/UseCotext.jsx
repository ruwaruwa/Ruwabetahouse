import { createContext, useContext, useEffect, useState } from "react";
const usecontexApi=createContext()
import jscookie from 'js-cookie'
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
export const UsercontextProvider=({children})=>{
const usenavigate=useNavigate()
const [email,setemail]=useState('')
const [Islogin,setislogin]=useState(false)
const logOUT = ()=>{
    console.log('logout')

    jscookie.remove('token')
    setislogin(false)
    usenavigate('/')
}
useEffect(()=>{
    const token= jscookie.get('token')
   // console.log(token)
   if(!token){
    usenavigate('/')
   }
else{
    
   const jwtdecoded= jwtDecode(token)
   setemail(jwtdecoded.email)
   setislogin(true)
}
},[])


    return (
        <usecontexApi.Provider value={{email,logOUT,Islogin,setislogin}}>
            {children}
        </usecontexApi.Provider>
    )
    
}
//usecontext funtion taan waa contextApi da

export const Use_usercontext=()=>{
    return useContext(usecontexApi)
}