import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jscookie } from 'js-cookie';
import { Use_usercontext } from '../Authentications/UseCotext';
const {setislogin}=Use_usercontext()
export default function Logout() {
    const usenavigate=useNavigate()
 useEffect(()=>{
    jscookie.remove('token')
    setislogin(false)
    usenavigate('/')
 },[])
}
