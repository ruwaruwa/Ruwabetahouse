import { Alert, Box } from '@mui/material'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import jsoncookie from 'js-cookie'
export default function Notfound() {
  const usenav=useNavigate()
  // return  <useNavigate to='/'/>
  useEffect(()=>{
    if(!jsoncookie.get('token')){
      usenav('/')
    }
    // if(jsoncookie.get('token')){
    //   usenav('/')
    // }

  },[])
return <div>not found</div>
  //  <Box sx={{color:'primary.dark'}}>
  // <h2 >Not Found this page ! ? </h2>
  //  </Box>
  
}
