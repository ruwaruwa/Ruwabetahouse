import { createContext, useContext, useEffect, useState } from "react";
const usecontexApi=createContext()
import jscookie from 'js-cookie'
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
export const UsercontextProvider=({children})=>{
const usenavigate=useNavigate()
const [email,setemail]=useState('')
const [Islogin,setislogin]=useState(false)
const [role,setrole]=useState('')
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
// if(token){

//     const tokendecode=jwtDecode(token)
//     console.log(tokendecode)
//     const reqes=axios.get(`users/${tokendecode.id}`)
//     console.log(reqes)
//     // .then(res=>res.data)
//     // setrole(reqes.data.role)
// }
},[])
 return (
        <usecontexApi.Provider value={{email,logOUT,Islogin,setislogin,role,setrole}}>
            {children}
        </usecontexApi.Provider>
)
    
}
//usecontext funtion taan waa contextApi da

export const Use_usercontext=()=>{
    return useContext(usecontexApi)
}