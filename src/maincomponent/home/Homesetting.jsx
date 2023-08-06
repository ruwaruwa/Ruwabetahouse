
// import { AddCircleOutline, AddHomeWork, ErrorOutlineOutlined, } from "@mui/icons-material";
// import { Alert, Box, Breadcrumbs, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Stack ,Typography} from "@mui/material"
// import TextField from '@mui/material/TextField';
// import { useEffect, useState } from "react";

// // import { getallClients,getclinetsBYid,Addclients,updateClients,delclinets } from "./apicrud";
// import { useForm } from "react-hook-form";
// import { DataGrid, gridRowsDataRowIdToIdLookupSelector } from '@mui/x-data-grid';
// import Swal from "sweetalert2";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from '@tanstack/react-query'
// import { useDeletehock } from "../DeleteHoks/Deletehock";
// import Delete_Confirm from "../DeleteComponen/Delete_Confirm";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import{Getall,Addnew,updates,Deletes} from '../../SHared/Apiconfig'

// import{getAllquery,Addquery,Updatequery,DeleteQuery} from  '../../SHared/ReactQuery'
// import Homelist from "./Homelist";
// export const Home=()=>{
//   const queryclient = useQueryClient()

//   const [dailogOpen,setDailog]=useState(false)

//   const {register,setValue,reset,handleSubmit,formState:{errors}}=useForm()
//   const ToggleDailog = ()=>{
//       setDailog(!dailogOpen)
//   }
//   const [DELETCLIENT,setcldeleteid]=useState('')
//   //cruidoperations
//   //const[clients,setalclients]=useState([]);
 
// const [rus,setrus]=useState(new Date())
// const[edit,setid]=useState('')

//   //update
  




// //use query manages
// const {data:client,isLoading,isError}=getAllquery('/shirkada','shirkada')

// /////post
// //   const {mutate,isLoading:mutateloading}=useMutation({
// //     mutationFn:async(data)=> await Addclients(data),
// //     onSuccess:()=>{

// // queryclient.invalidateQueries({queryKey:['clients']})
// //  toast.success('success fully saved !')
// // // console.log('succees')
// // // setReset(new Date())
// //     },
    
// //     onError:()=>{
// //       console.log('err ayaa jiro')
// //     }
  
// //   })

// ////////////////////post new eh last isku day
// const {mutate,isLoading:mutateloading}=Addquery('/shirkada','shirkada')




//   //upd
// // const{mutate:updatemutate,isLoading:updateloading}=useMutation({
// // mutationFn:async(data)=>{
// //   return await update(edit,data)

// // },
// // onSuccess:()=>{
// //   queryclient.invalidateQueries({queryKey:['clients']})
// // toast.success('successfully updated !!!')
// //   ToggleDailog()
// //   setReset(new Date())
// //   reset()
// // },
// // onError:(E)=>{
// // console.log('sorry upate madhicin',E)
// // }
// // })

// // const{mutate:updatemutate,isLoading:updateloading}=useMutation({
// //   mutationFn:async(data)=>{
// //     return await updates(`gellary/${edit}`,data)
  
// //   },
// //   onSuccess:()=>{
// //     queryclient.invalidateQueries({queryKey:['gellary']})
// //   toast.success('successfully updated !!!')
// //     ToggleDailog()
    
  
// //   },
// //   onError:(E)=>{
// //     // console.log('test',data)
// //   console.log('sorry upate madhicin',E)
// //   }
// //   })
  
// /////////une updates

// const{mutate:updatemutate,isLoading:updateloading}=Updatequery(`/shirkada/${edit}`,'shirkada')


//   const newCLIENTS= async(data)=>{
// if(edit !==''){
// try {
//   // await updateClients(edit,data)
//   // console.log('wala update garereyy datadaan !!')
//   ToggleDailog()
//   updatemutate(data)
//   reset()
//   // setReset(new Date())
  
// } catch (error) {
//   console.log('erro !',error)
// }
// }
// else{
// try {
//   // await Addclients(data)
//   // console.log('wala save gareyey !!!')
//   mutate(data)
//   ToggleDailog()


// } catch (error) {
//   console.log('err',error)
// }

// }
//   }
// //new pos end
// //updat qimah
// const UpdateClientInfo = async (data)=>{
// console.log(data.name)
//       setValue("name",data.name)
//       console.log(data.location)
//       setValue("location",data.location)
// console.log(data.logo)
//    setValue("logo",data.logo)
//    console.log(data.email)
//       setValue("email",data.email)
//       console.log(data.address)
//       setValue("address",data.address)
//       console.log(data.phone)
//       setValue("phone",data.phone)
//       console.log(data.facebook)
//       setValue("facebook",data.facebook)
//       console.log(data.tiktok)
//       setValue("tiktok",data.tiktok)
//       console.log(data.twitter)
//       setValue("twitter",data.twitter)
//       console.log(data.Instigram)
//       setValue("Instigram",data.Instigram)
//       console.log(data.her_title)
//       setValue("her_title",data.her_title)
//       console.log(data.hero_img)
//       setValue("hero_img",data.hero_img)
//       console.log(data.hero_description)
//       setValue("hero_description",data.hero_description)
//       console.log(data.footer_Text)
//       setValue("footer_Text",data.footer_Text)
//       setid(data._id)
//       // console.log('woo wada',edit)
//       ToggleDailog()
//       // setReset(new Date())
    
//   }
  
//   //delete sections


// ///dete
// const {mutate:deletemutate,}=DeleteQuery(`/shirkada/${DELETCLIENT}`)
// //delete hoks
// const delethok= useDeletehock()
// const deleteCHeck=()=>{
//   deletemutate(DELETCLIENT)
//   delethok.TOggle()
 
// }

// ////
// const deletes = async (data) =>{
//   // await delclinets()
//   delethok.setmessage(data.title)

// delethok.TOggle()

//  setcldeleteid(data._id)
//   // console.log('deleted',)
//   // alert(_id)
//   setrus(new Date())
// }

//     return<>
//    <Box sx={{p:2}}>
// <Delete_Confirm OPEn={delethok.OPEns} TOGELER={delethok.TOggle}message={delethok.message}confirm={deleteCHeck} />



//    {/* {...........bredpoints} */}
//    {/* <Breadcrumbs aria-label="breadcrumb">
//    <Link underline="hover" color="inherit" href="#">
//     Dashboard
//   </Link>
 
//   <Typography color="text.primary">Clients</Typography>
//    </Breadcrumbs> */}

//    {/* {.....end......bredpoints} */}




//     <Alert severity="info" sx={{p:2}}>our home  </Alert>

//  {/* <Divider sx={{height:10}}> */}
  
//     <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
//         <Typography variant="h6">List home</Typography>
  
//         <IconButton onClick={ToggleDailog}>
// <AddCircleOutline sx={{color:"primary.main",fontSize:'50px'}}/>
//         </IconButton>
//     </Box>




//    {/* {mytext feilds} */}
// <Dialog open={dailogOpen} onClose={ToggleDailog}>

//   <DialogTitle>New homesetting</DialogTitle>
//   <Box  component={"form"} onSubmit={handleSubmit(newCLIENTS)}>
//    <DialogContent>

//    <Box sx={{width:'380px',mt:2}}> 
// <Stack spacing={2} direction={"column"}>
// <Box>
// <TextField
//    label="name" variant="outlined" {...register('name',{required:true})}size="small"fullWidth
//          />
//          {errors.name && <Typography sx={{color:'red'}}>please enter name</Typography>}
// </Box>
// <Box>
// <TextField
//    label="location" variant="outlined" {...register('location',{required:true})}size="small"fullWidth
//          />
//          {errors.location && <Typography sx={{color:'red'}}>please enter location</Typography>}
// </Box>
//        <Box>
//        <TextField
      
//       variant="outlined"
//       label="logo"{...register('logo',{required:true})} size="small"fullWidth
    
//     />
//          {errors.logo && <Typography sx={{color:'red'}}>please enter logo</Typography>}
//        </Box>
//        <Box>
// <TextField
//    label="email" variant="outlined" {...register('email',{required:true})}size="small"fullWidth
//          />
//          {errors.email && <Typography sx={{color:'red'}}>please enter email</Typography>}
// </Box>

// <Box>
// <TextField
//    label="address" variant="outlined" {...register('address',{required:true})}size="small"fullWidth
//          />
//          {errors.address && <Typography sx={{color:'red'}}>please enter address</Typography>}
// </Box>
// <Box>
// <TextField
//    label="phone" variant="outlined" {...register('phone',{required:true})}size="small"fullWidth
//          />
//          {errors.phone && <Typography sx={{color:'red'}}>please enter phone</Typography>}
// </Box>
// <Box>
// <TextField
//    label="facebook" variant="outlined" {...register('facebook',{required:true})}size="small"fullWidth
//          />
//          {errors.facebook && <Typography sx={{color:'red'}}>please enter facebook</Typography>}
// </Box>
// <Box>
// <TextField
//    label="tiktok" variant="outlined" {...register('tiktok',{required:true})}size="small"fullWidth
//          />
//          {errors.tiktok && <Typography sx={{color:'red'}}>please enter tiktok</Typography>}
// </Box>
// <Box>
// <TextField
//    label="twitter" variant="outlined" {...register('twitter',{required:true})}size="small"fullWidth
//          />
//          {errors.twitter && <Typography sx={{color:'red'}}>please enter twitter</Typography>}
// </Box>
// <Box>
// <TextField
//    label="Instigram" variant="outlined" {...register('Instigram',{required:true})}size="small"fullWidth
//          />
//          {errors.Instigram && <Typography sx={{color:'red'}}>please enter Instigram</Typography>}
// </Box>
// <Box>
// <TextField
//    label="her_title" variant="outlined" {...register('her_title',{required:true})}size="small"fullWidth
//          />
//          {errors.her_title && <Typography sx={{color:'red'}}>please enter her_title</Typography>}
// </Box>
// <Box>
// <TextField
//    label="hero_img" variant="outlined" {...register('hero_img',{required:true})}size="small"fullWidth
//          />
//          {errors.hero_img && <Typography sx={{color:'red'}}>please enter hero_img</Typography>}
// </Box>
// <Box>
// <TextField
//    label="hero_description" variant="outlined" {...register('hero_description',{required:true})}size="small"fullWidth
//          />
//          {errors.hero_description && <Typography sx={{color:'red'}}>please enter hero_description</Typography>}
// </Box>
// <Box>
// <TextField
//    label="footer_Text" variant="outlined" {...register('footer_Text',{required:true})}size="small"fullWidth
//          />
//          {errors.footer_Text && <Typography sx={{color:'red'}}>please enter footer_Text</Typography>}
// </Box>
// </Stack>

//     </Box>
//    </DialogContent>
   
//    <DialogActions>
//           <Button onClick={ToggleDailog}>Cancel</Button>
//           <Button variant="contained" disabled={mutateloading} type="submit"  size="small">
//           {edit? "Update" :"submit"}
//           </Button>
 
//         </DialogActions>
//         </Box>
//    </Dialog>
//    {/* <ClientList /> */}
//    {/* </Divider> */}
   
//    {isError ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
//    <Box>

// <ErrorOutlineOutlined sx={{fontSize:"60px" }} />
// <Typography sx={{color:'red'}} >Data not found it !!</Typography>
//     </Box>

//    </Box>): isLoading ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
//     <Box>
//    <CircularProgress sx={{fontSize:"60px" }}/>
// <Typography >Loading...</Typography>
//     </Box>
//    </Box>) : <Homelist  clientData={client?.data} clientsUpdate={UpdateClientInfo} clientDelete={deletes} />}
//   {/* //  <Box>
// // 
//   //  </Box> */}
// //////   end shirkada home setting
//     </Box>
//     </>
// }

