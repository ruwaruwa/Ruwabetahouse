import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './login.css'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
//import { Alarm } from '@mui/icons-material'
import jsoncookie from 'js-cookie'
import { Use_usercontext } from '../Authentications/UseCotext'
import { useNavigate } from 'react-router-dom'
export default function Logn() {

    useEffect(()=>{
if(jsoncookie.get('token')){
      usenav('/dashbord')
    }
    },[])
    const {register,setValue,handleSubmit,}=useForm()
    const {setislogin}=Use_usercontext()

    const usenav=useNavigate()
    const{mutateAsync,isError,isLoading,error,data:respost}=useMutation({
        mutationFn:async(data)=>{
            return await axios.post('https://betahouseapi.vercel.app/login',data)
        },
        onError:(er)=>{
            console.log("ero",er)
        }
    })
    const login=(data)=>{

    mutateAsync(data).then((res)=>{
        jsoncookie.set('token',res.data.Accestoken)
 //console.log('successfuly loged !! ',res.data.Accestoken)
 if(res.status === 200){
    setislogin(true)
    usenav('/dashbord')

   //window.location.href="/dashbord"

 }
//  else{

//  }
    })
 //console.log(xogta)

    }
  return (
    <>
<Box sx={{}} >
<Box component={'form'} onSubmit={handleSubmit(login)} sx={{width:420,height:150,p:6,mx:'auto',borderRadius:4,backgroundColor:'white',mt:6,boxShadow:8}}>
<Typography sx={{textAlign:'center',marginBottom:1,color:'primary.main',fontSize:20}}>sign in </Typography>
<Stack direction={'column'} spacing={2}>
    
    {isError &&<Alert>in correct password or email</Alert>}
<TextField  {...register('email')}id='email' size='small' label='email' variant='outlined'/>
<TextField {...register('password')}id='password' size='small' label='password' variant='outlined'/>
<Button type='submit' variant='contained' size='small' disabled={isLoading}>login</Button>

</Stack>

    </Box>
</Box>
    </>
  )
}
