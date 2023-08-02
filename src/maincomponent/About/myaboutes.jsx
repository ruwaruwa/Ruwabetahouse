import { AddHomeWork } from '@mui/icons-material'
import { Alert,Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GetAbout, adAbouts, updatAbout } from './APIcruid'
import { AboutLists } from './AboutLists'

  const About=()=> {
const[OpenDiolog,setOPenDilog]=useState(false)
const[ABOUT,setAbout]=useState([])
const[edit,setid]=useState('')
// const[]=useState()
const{register,setValue,reset,handleSubmit,formState:{errors}}=useForm()
const TOgaldilog=()=>{
    setOPenDilog(!OpenDiolog)
}
//get

// useEffect(()=>{
//     const abotLIST=async()=>{
//         const aboutdata= await GetAbout()
//     console.log(aboutdata.data)
//     setAbout(aboutdata.data)
//     }
//     abotLIST()
// },[])
  
const {data:client,isLoading,isError}=useQuery({
    queryKey:['clients'],
queryFn: async()=> await getallClients(),
onError:(er)=>{
toast.error('sorry canot be get ',er)
}
  })

//ipdt post
const ADNEW_ABout=async(data)=>{
    if(edit !==''){
       try {
        await updatAbout(edit,data)
        console.log('success fully updated !!')
        TOgaldilog()
       } catch (error) {
        console.log('error aya jiro',error)
       }
    }
    else{
        try {
            await adAbouts(data)
            console.log('success fully saved')
            TOgaldilog()

        } catch (error) {
           console.log('xogtan lama gudbin karo',error) 
        }
    }
}
//
const UpdateClientInfo = async (data)=>{
    console.log(data.full_descrip)
          setValue("full_descrip",data.full_descrip)
    
    console.log(data.description)
       setValue("description",data.description)
          setid(data._id)
          TOgaldilog()
          //setReset(new Date())
      
      }

  return (
    <>
     <Box>
        <Alert severity='info'>about us</Alert>
        <Box sx={{display:"flex",justifyContent:"space-between"}} my={4}>
        <Typography variant="h6">About List</Typography>
  
        <IconButton onClick={TOgaldilog}>
<AddHomeWork sx={{color:"green"}}/>
        </IconButton>
    </Box>

    <Dialog open={OpenDiolog}onClose={TOgaldilog}>
<DialogTitle>New About</DialogTitle>
<Box component={'form'} onSubmit={handleSubmit(ADNEW_ABout)}>
<DialogContent>
<Box sx={{width:'400px',mt:2}}> 
<Stack spacing={2} direction={"column"}>
<Box>
<TextField
   label="full_descrip" variant="outlined" {...register('full_descrip',{required:true})}size="small"fullWidth
         />
         {errors.full_descrip && <Typography sx={{color:'red'}}>please enter full_descrip</Typography>}
</Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="description"{...register('description',{required:true})} size="small"fullWidth
    
    />
         {errors.description && <Typography sx={{color:'red'}}>please enter description </Typography>}
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
    {ABOUT ? <AboutLists Add_aboutS={ABOUT} UpdateAbout={UpdateClientInfo}/>:null}
     </Box>

    </>
  
  )
}
