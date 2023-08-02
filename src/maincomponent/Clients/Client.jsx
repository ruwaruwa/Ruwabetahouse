
import { AddHomeWork, ErrorOutlineOutlined, } from "@mui/icons-material";
import { Alert, Box, Breadcrumbs, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Stack ,Typography} from "@mui/material"
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import  ClientList  from "./ClientsList";
// import { getallClients,getclinetsBYid,Addclients,updateClients,delclinets } from "./apicrud";
import { useForm } from "react-hook-form";
import { DataGrid, gridRowsDataRowIdToIdLookupSelector } from '@mui/x-data-grid';
import Swal from "sweetalert2";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useDeletehock } from "../DeleteHoks/Deletehock";
import Delete_Confirm from "../DeleteComponen/Delete_Confirm";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import{Getall,Addnew,updates,Deletes} from '../../SHared/Apiconfig'
export const Clients=()=>{
  const queryclient = useQueryClient()

  const [dailogOpen,setDailog]=useState(false)

  const {register,setValue,reset,handleSubmit,formState:{errors}}=useForm()
  const ToggleDailog = ()=>{
      setDailog(!dailogOpen)
  }
  const [DELETCLIENT,setcldeleteid]=useState('')
  //cruidoperations
  //const[clients,setalclients]=useState([]);
  const[Reset,setReset]=useState(new Date())

const[edit,setid]=useState('')
//   useEffect(()=>{

//     const getalclient = async()=>{
// const clientDATA= await getallClients()
// // await clientDATA.getallClients
// console.log(clientDATA.data)
// //console.log(clients)
// setalclients(clientDATA.data)

//     }
//     getalclient()
//   },[Reset])

  ////////post


  //update
  
//   const {data:client,isLoading,isError}=useQuery({
//     queryKey:['clients'],
// queryFn: async()=> await Getall(),
// onError:(er)=>{
// toast.error('sorry canot be get ',er)
// }
//   })

const {data:client,isLoading,isError}=useQuery({
  queryKey:['clients'],
queryFn: async(data)=> await Getall('clients',data),
onError:(er)=>{
toast.error('sorry canot be get ',er)
}
})

/////post
//   const {mutate,isLoading:mutateloading}=useMutation({
//     mutationFn:async(data)=> await Addclients(data),
//     onSuccess:()=>{

// queryclient.invalidateQueries({queryKey:['clients']})
//  toast.success('success fully saved !')
// // console.log('succees')
// // setReset(new Date())
//     },
    
//     onError:()=>{
//       console.log('err ayaa jiro')
//     }
  
//   })
const {mutate,isLoading:mutateloading}=useMutation({
  mutationFn:async(data)=> await Addnew('clients',data),
  onSuccess:()=>{

queryclient.invalidateQueries({queryKey:['clients']})
toast.success('success fully saved !')
// console.log('succees')
// setReset(new Date())
  },
  
  onError:()=>{
    console.log('err ayaa jiro')
  }

})



  //upd
// const{mutate:updatemutate,isLoading:updateloading}=useMutation({
// mutationFn:async(data)=>{
//   return await update(edit,data)

// },
// onSuccess:()=>{
//   queryclient.invalidateQueries({queryKey:['clients']})
// toast.success('successfully updated !!!')
//   ToggleDailog()
//   setReset(new Date())
//   reset()
// },
// onError:(E)=>{
// console.log('sorry upate madhicin',E)
// }
// })

const{mutate:updatemutate,isLoading:updateloading}=useMutation({
  mutationFn:async(data)=>{
    return await updates(`clients/${edit}`,data)
  
  },
  onSuccess:()=>{
    queryclient.invalidateQueries({queryKey:['clients']})
  toast.success('successfully updated !!!')
    ToggleDailog()
    
    reset()
  },
  onError:(E)=>{
    // console.log('test',data)
  console.log('sorry upate madhicin',E)
  }
  })
  
  const newCLIENTS= async(data)=>{
if(edit !==''){
try {
  // await updateClients(edit,data)
  // console.log('wala update garereyy datadaan !!')
  // ToggleDailog()
  updatemutate(data)

  // setReset(new Date())
  
} catch (error) {
  console.log('erro !',error)
}
}
else{
try {
  // await Addclients(data)
  // console.log('wala save gareyey !!!')
  mutate(data)
  ToggleDailog()

  // Swal.fire({
  //   position: 'top-end',
  //   icon: 'success',
  //   title: 'Your work has been saved',
  //   showConfirmButton: false,
  //   timer: 1500
  // })
  // setReset(new Date())
} catch (error) {
  console.log('err',error)
}

}
  }
//new pos end
//updat qimah
const UpdateClientInfo = async (data)=>{
console.log(data.name)
      setValue("name",data.name)

console.log(data.client_logo)
   setValue("client_logo",data.client_logo)
      setid(data._id)
      console.log('woo wada',edit)
      ToggleDailog()
      // setReset(new Date())
  
  }
  
  //delete sections



///delete mutate
const {mutate:deletemutate,}=useMutation({
  mutationFn:(id)=>Deletes(`clients/${id}`),
  onSuccess:()=>{
 toast.success('successfuly deleted !! ')
    delethok.TOggle()
    queryclient.invalidateQueries({queryKey:['clients']})

  },
  onError:()=>{
    // console.log('sorry canot be deleted !!!!')
    toast.error('sorry canot be deleted !!')
  }
})
//delete hoks
const delethok= useDeletehock()
const deleteCHeck=()=>{
  deletemutate(DELETCLIENT)

}

////
const deletes = async (data) =>{
  // await delclinets()
  delethok.setmessage(data.name)

delethok.TOggle()

 setcldeleteid(data._id)
  // console.log('deleted',)
  // alert(_id)
}

    return<>
   <Box sx={{p:2}}>
<Delete_Confirm OPEn={delethok.OPEns} TOGELER={delethok.TOggle}message={delethok.message}confirm={deleteCHeck} />



   {/* {...........bredpoints} */}
   {/* <Breadcrumbs aria-label="breadcrumb">
   <Link underline="hover" color="inherit" href="#">
    Dashboard
  </Link>
 
  <Typography color="text.primary">Clients</Typography>
   </Breadcrumbs> */}

   {/* {.....end......bredpoints} */}




    <Alert severity="info" sx={{p:2}}>our client services </Alert>

 {/* <Divider sx={{height:10}}> */}
  
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
        <Typography variant="h6">List Clients</Typography>
  
        <IconButton onClick={ToggleDailog}>
<AddHomeWork sx={{color:"primary.main",fontSize:'45px'}}/>
        </IconButton>
    </Box>




   {/* {mytext feilds} */}
<Dialog open={dailogOpen} onClose={ToggleDailog}>

  <DialogTitle>New Clients</DialogTitle>
  <Box  component={"form"} onSubmit={handleSubmit(newCLIENTS)}>
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
      label="client_logo"{...register('client_logo',{required:true})} size="small"fullWidth
    
    />
         {errors.client_logo && <Typography sx={{color:'red'}}>please enter clients logo</Typography>}
       </Box>
  
     
      
</Stack>

    </Box>
   </DialogContent>
   
   <DialogActions>
          <Button onClick={ToggleDailog}>Cancel</Button>
          <Button variant="contained" disabled={mutateloading} type="submit"  size="small">
          {edit? "Update" :"submit"}
          </Button>
 
        </DialogActions>
        </Box>
   </Dialog>
   {/* <ClientList /> */}
   {/* </Divider> */}
   
   {isError ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
   <Box>

<ErrorOutlineOutlined sx={{fontSize:"58px" }} />
<Typography sx={{color:'red'}} >Data not found it !!</Typography>
    </Box>

   </Box>): isLoading ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
    <Box>
   <CircularProgress sx={{fontSize:"58px" }}/>
<Typography >Loading...</Typography>
    </Box>
   </Box>) : <ClientList  clientData={client?.data} clientsUpdate={UpdateClientInfo} clientDelete={deletes} />}
  {/* //  <Box>

  //  </Box> */}
   {/* {clients ? <ClientList clientData={clients} clientDelete={deletes} clientsUpdate={UpdateClientInfo}/> : null } */}
    </Box>
    </>
}