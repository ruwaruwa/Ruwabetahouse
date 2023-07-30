import { AddHomeWork } from '@mui/icons-material'
import { Alert,Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


import { GetAllContact, adContact, updatContact } from './Con_Api'
import { Contactlist } from './Contactlist'

export  const ContacTs=()=> {
const[OpenDiolog,setOPenDilog]=useState(false)
const[ConatcTS,setCONTac]=useState([])
const[edit,setid]=useState('')
const[]=useState()
const{register,setValue,reset,handleSubmit,formState:{errors}}=useForm()
const TOgaldilog=()=>{
    setOPenDilog(!OpenDiolog)
}
//get

useEffect(()=>{
    const abotLIST=async()=>{
        const aboutdata= await GetAllContact()
    console.log(aboutdata.data)
    setCONTac(aboutdata.data)
    }
    abotLIST()
},[])

//ipdt post
const ADNEW_CONTACTS=async(data)=>{
    if(edit !==''){
       try {
        await updatContact(edit,data)
        console.log('success fully updated !!')
        TOgaldilog()
       } catch (error) {
        console.log('error aya jiro',error)
       }
    }
    else{
        try {
            await adContact(data)
            console.log('success fully saved')
            TOgaldilog()

        } catch (error) {
           console.log('xogtan lama gudbin karo',error) 
        }
    }
}
//
const UpdateClientInfo = async (data)=>{
    console.log(data.name)
          setValue("name",data.name)
    
    console.log(data.message)
       setValue("message",data.message)

       console.log(data.phone)
       setValue("phone",data.phone)
          setid(data._id)
          TOgaldilog()
          //setReset(new Date())
      
      }

  return (
    <>
     <Box>
        <Alert severity='info' sx={{p:2,mt:1}}>Contacts us</Alert>
        <Box sx={{display:"flex",justifyContent:"space-between"}} my={4}>
        <Typography variant="h5">Contacts List</Typography>
  
        <IconButton onClick={TOgaldilog}>
<AddHomeWork sx={{color:"green"}}/>
        </IconButton>
    </Box>

    <Dialog open={OpenDiolog}onClose={TOgaldilog}>
<DialogTitle>New Contacts</DialogTitle>
<Box component={'form'} onSubmit={handleSubmit(ADNEW_CONTACTS)}>
<DialogContent>
<Box sx={{width:'300px',mt:2}}> 
<Stack spacing={2} direction={"column"}>
<Box>
<TextField
   label="name" variant="outlined" {...register('name',{required:true})}size="small"fullWidth
         />
         {errors.name && <Typography sx={{color:'red'}}>please enter name</Typography>}
</Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="message"{...register('message',{required:true})} size="small"fullWidth
    
    />
         {errors.message && <Typography sx={{color:'red'}}>please enter message </Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="phone"{...register('phone',{required:true})} size="small"fullWidth
    
    />
         {errors.phone && <Typography sx={{color:'red'}}>please enter phone </Typography>}
       </Box>
  
     
      
</Stack>

    </Box>
</DialogContent>
<DialogActions>
<Button onClick={TOgaldilog}>Cancel</Button>
          <Button variant="contained" type="submit"  size="small">
          {edit? "Update" :"submit"}
          </Button>
</DialogActions>
</Box>
    </Dialog>


    {/* <AboutLists /> */}
    {ConatcTS ? <Contactlist newcontacts={ConatcTS} updateCONTACTS={UpdateClientInfo}/>:null}
     </Box>

    </>
  
  )
}
