import { Alert, Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography ,TextField, DialogActions, Button, CircularProgress} from '@mui/material'
import React, { useEffect, useState } from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useForm } from 'react-hook-form';
import ServiceList from './ServiceList';
import {aDSERVICE,getservice,getONE_service,DeletService,updatteService } from './allCruidapi';
import Swal from 'sweetalert2';
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query'
import { useDeletehock } from '../DeleteHoks/Deletehock';
import Delete_Confirm from '../DeleteComponen/Delete_Confirm';
import { toast } from 'react-toastify';
export const  Service=()=> {

    const queryclient = useQueryClient()

const[daillogOpen,setDallog]=useState(false)

const {register,setValue,handleSubmit,reset,formState:{errors}}=useForm()
const togell=()=>{
setDallog(!daillogOpen)
}
const[Service,setSERVICE]=useState([])

const[EDIT,sETeDi]=useState('')
const[Deletes,setdeletes]=useState('')
const[rease,setretes]=useState(new Date())
// useEffect(()=>{
//     const Servicelis=async()=>{
//         const serviceDATA= await getservice()
// setSERVICE(serviceDATA.data)
// console.log(serviceDATA.data)
//     }
//     Servicelis()
// },[])

//update and post

///react query
const{data:Servicee,isLoading,isError}=useQuery({
    queryKey:['service'],
    queryFn:async()=> await getservice(),
    onError:(err)=>{
        toast.success('sorry canot get this api')
    }
})
///post
const{mutate,isLoading:mutataloading}=useMutation({
    mutationFn:async(data)=> aDSERVICE(data),
    onSuccess:()=>{
        queryclient.invalidateQueries({queryKey:['service']})
        // console.log('saved succes')
        toast.success('success fully saved')
        // setretes(new Date())
    },
    onError:()=>{
        toast.error('sorry lama seve gareyn')
    }
})
//update
const{mutate:updatemutate,isLoading:updateloading}=useMutation({
    mutationFn:async(data)=>{
        return await updatteService(EDIT,data),
        // console.log('succesfuly updated')
        toast.success('success fully updated')
    },
    onError:(e)=>{
       toast.error('sorry err aya jiro canot updated !!')
    }
})




const adnewServiceItems=async(data)=>{
if(EDIT !==''){
    try {
    // await updatteService(EDIT,data)
    // console.log('successfull updated !!')
    // togell()
updatemutate(data)
// setretes(new Date())
    } catch (error) {
     console.log('eror aya jiro',error)   
    }
}
else{
   try {
    // await aDSERVICE(data)
    // console.log('saved')
    // togell()
    mutate(data)
        togell()
        setretes(new Date())
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
    setretes(new Date())
}
//delete mutae
const{mutate:deletemutate}=useMutation({
mutationFn:(id)=> DeletService(id),
onSuccess:()=>{
    // console.log('successfuly deleted !!')
    toast.success('success fully deleted !!')
    DeleteHoks.TOggle()
    queryclient.invalidateQueries({queryKey:['service']})

},
onError:()=>{
    toast.error('sorry lama delete gareynin')
}
})
//delete hooks
const DeleteHoks=useDeletehock()
const DELETE_check=()=>{
    deletemutate(Deletes)
}

//deletes inf
const  DELETEs=async(data)=>{
    
DeleteHoks.setmessage(data.title)
DeleteHoks.TOggle()
setdeletes(data._id)

}

//

  return (
 <Box sx={{p:1}}>
<Delete_Confirm  OPEn={DeleteHoks.OPEns} TOGELER={DeleteHoks.TOggle} message={DeleteHoks.message} confirm={DELETE_check}/>
<Alert security='primary'>OUR SERVICE</Alert>
<Box sx={{display:'flex' ,justifyContent:'space-between',my:4}}>
<Typography variant='h6'>new serviceList</Typography>

<IconButton onClick={togell}>
<GroupAddIcon sx={{color:'primary.dark',fontSize:'45px'}}></GroupAddIcon>
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
            <Button security='contained' disabled={mutataloading} type='submit'>submit</Button>
            </DialogActions> 

</Box>
   
</Dialog>
{/* {................serviceliist} */}
{isError ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
<Box>

<ErrorOutlineOutlined sx={{fontSize:"58px" }} />
<Typography sx={{color:'red'}} >Data not found it !!</Typography>
    </Box>
</Box>): isLoading ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
<Box>
   <CircularProgress sx={{fontSize:"58px" }}/>
<Typography >Loading....</Typography>
    </Box>
</Box>):<ServiceList SERVICEDATA={Servicee?.data} serviceUPdate={updateinforma} serviceDELETE={DELETEs}/>}
{/* <ServiceList/> */}
{/* {Service ? <ServiceList SERVICEDATA={Service} serviceUPdate={updateinforma} serviceDELETE={DELETEs} /> : null} */}
 </Box>

  )
}
