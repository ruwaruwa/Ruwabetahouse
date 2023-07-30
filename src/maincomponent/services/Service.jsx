import { Alert, Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography ,TextField, DialogActions, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useForm } from 'react-hook-form';
import ServiceList from './ServiceList';
import {aDSERVICE,getservice,getONE_service,DeletService,updatteService } from './allCruidapi';
import Swal from 'sweetalert2';
export const  Service=()=> {
const[daillogOpen,setDallog]=useState(false)

const {register,setValue,handleSubmit,reset,formState:{errors}}=useForm()
const togell=()=>{
setDallog(!daillogOpen)
}
const[Service,setSERVICE]=useState([])

const[EDIT,sETeDi]=useState('')

useEffect(()=>{
    const Servicelis=async()=>{
        const serviceDATA= await getservice()
setSERVICE(serviceDATA.data)
console.log(serviceDATA.data)
    }
    Servicelis()
},[])

//update and post
const adnewServiceItems=async(data)=>{
if(EDIT !==''){
    try {
    await updatteService(EDIT,data)
    console.log('successfull updated !!')
    togell()

    } catch (error) {
     console.log('eror aya jiro',error)   
    }
}
else{
   try {
    await aDSERVICE(data)
    console.log('saved')
    togell()
   } catch (error) {
    console.log('err aya jir fadlan xaqiji',error)
   }
    
}
}

///update xota
const updateinforma=async(Data)=>{
    console.log(Data.title)
    setValue('title',Data.title)
    console.log(Data.description)
    setValue('description',Data.description)
    console.log(Data.icon)
    setValue('icon',Data.icon)
    sETeDi(Data._id)
    togell()
}
//delete
// const DELETE= async(data)=>{
//     try {
//         await DeletService(data)
//     } catch (error) {
//         console.log('eror',data)
//     }
// }

const  DELETEs=async(data)=>{
    console.log("wala delete gareyey",data)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been Deleted !!',
        showConfirmButton: false,
        timer: 1500
      })
      reset()
}

//

  return (
 <Box>
<Alert security='primary'>OUR SERVICE</Alert>
<Box sx={{display:'flex' ,justifyContent:'space-between',my:4}}>
<Typography variant='h6'>new serviceList</Typography>

<IconButton onClick={togell}>
<GroupAddIcon sx={{color:'burlywood'}}></GroupAddIcon>
</IconButton>

</Box>
{/* {........my sevice flid} */}
<Dialog open={daillogOpen} onClose={togell}>
    <DialogTitle>new service</DialogTitle>
    
<Box component={'form'} onSubmit={handleSubmit(adnewServiceItems)}>
<DialogContent>
    <Box sx={{width:'300px',mt:2}}>
     
        
        <Stack spacing={3} direction={'column'}>

        <Box>
        <TextField
   label="title" variant="outlined" {...register('title',{
    required:true
   })} size="small"fullWidth
   />
   {errors.title && <Typography sx={{color:'red'}}>please enter title</Typography>}
            </Box>

        <Box>
<TextField variant="outlined" label="description"  {...register('description',{required:true})} size="small"fullWidth
   />
 {errors.description &&<Typography sx={{color:'red'}}>please enter descrip</Typography>}
</Box>
<Box>
<TextField label="icon" variant="outlined" {...register("icon",{required:true})} size="small"fullWidth/>
         {errors.icon && <Typography sx={{color:'red'}}>please enter icon</Typography>}
</Box>

</Stack>
      

</Box>
    </DialogContent>

        <DialogActions>
            <Button onClick={togell}>cancel</Button>
            <Button security='contained' type='submit'>submit</Button>
            </DialogActions> 

</Box>
   
</Dialog>
{/* {................serviceliist} */}

{/* <ServiceList/> */}
{Service ? <ServiceList SERVICEDATA={Service} serviceUPdate={updateinforma} serviceDELETE={DELETEs} /> : null}
 </Box>

  )
}
