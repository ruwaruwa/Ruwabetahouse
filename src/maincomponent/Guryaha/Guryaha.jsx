
import { AddCircleOutline, AddHomeWork, ErrorOutlineOutlined, } from "@mui/icons-material";
import { Alert, Box, Breadcrumbs, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputLabel, ListItem, ListSubheader, MenuItem, Select, Stack ,Typography} from "@mui/material"
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";

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
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDeletehock } from "../DeleteHoks/Deletehock";
import Delete_Confirm from "../DeleteComponen/Delete_Confirm";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import{Getall,Addnew,updates,Deletes} from '../../SHared/Apiconfig'

import{getAllquery,Addquery,Updatequery,DeleteQuery} from  '../../SHared/ReactQuery'
import Guryahalist from "./Guryahalist";
// import Homelist from "./Homelist";
export const Guryaha=()=>{
  const queryclient = useQueryClient()

  const [dailogOpen,setDailog]=useState(false)

  const {register,setValue,reset,handleSubmit,formState:{errors}}=useForm()
  const ToggleDailog = ()=>{
      setDailog(!dailogOpen)
  }
  const [DELETCLIENT,setcldeleteid]=useState('')
  //cruidoperations
  //const[clients,setalclients]=useState([]);
 
const [rus,setrus]=useState(new Date())
const[edit,setid]=useState('')

  //update
  




//use query manages
const {data:client,isLoading,isError}=getAllquery('/guryaha','guryaha')

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

////////////////////post new eh last isku day
const {mutate,isLoading:mutateloading}=Addquery('/guryaha','guryaha')




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

// const{mutate:updatemutate,isLoading:updateloading}=useMutation({
//   mutationFn:async(data)=>{
//     return await updates(`gellary/${edit}`,data)
  
//   },
//   onSuccess:()=>{
//     queryclient.invalidateQueries({queryKey:['gellary']})
//   toast.success('successfully updated !!!')
//     ToggleDailog()
    
  
//   },
//   onError:(E)=>{
//     // console.log('test',data)
//   console.log('sorry upate madhicin',E)
//   }
//   })
  
/////////une updates

const{mutate:updatemutate,isLoading:updateloading}=Updatequery(`/guryaha/${edit}`,'guryaha')


  const newCLIENTS= async(data)=>{
if(edit !==''){
try {
  // await updateClients(edit,data)
  // console.log('wala update garereyy datadaan !!')
  ToggleDailog()
  updatemutate(data)
  reset()
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


} catch (error) {
  console.log('err',error)
}

}
  }
//new pos end
//updat qimah
const UpdateClientInfo = async (data)=>{
console.log(data.Housetype)
      setValue("Housetype",data.Housetype)
      console.log(data.area)
      setValue("area",data.area)
console.log(data.adress)
   setValue("adress",data.adress)
   console.log(data.age)
      setValue("age",data.age)
      console.log(data.deposit)
      setValue("deposit",data.deposit)
      console.log(data.rent)
      setValue("rent",data.rent)
      console.log(data.parking)
      setValue("parking",data.parking)
      console.log(data.imagepreview)
      setValue("imagepreview",data.imagepreview)
      console.log(data.isAvailable)
      setValue("isAvailable",data.isAvailable)

      console.log(data.rooms)
      setValue("rooms",data.rooms)
      console.log(data.pathrooms)
      setValue("pathrooms",data.pathrooms)
      console.log(data.masterRooms)
      setValue("masterRooms",data.masterRooms)
      console.log(data.description)
      setValue("description",data.description)
      // console.log(data.footer_Text)
      // setValue("footer_Text",data.footer_Text)
      setid(data._id)
      // console.log('woo wada',edit)
      ToggleDailog()
      // setReset(new Date())
    
  }
  
  //delete sections


///dete
const {mutate:deletemutate,}=DeleteQuery(`/guryaha/${DELETCLIENT}`)
//delete hoks
const delethok= useDeletehock()
const deleteCHeck=()=>{
  deletemutate(DELETCLIENT)
  delethok.TOggle()
 
}

////
const deletes = async (data) =>{
  // await delclinets()
  delethok.setmessage(data.title)

delethok.TOggle()

 setcldeleteid(data._id)
  // console.log('deleted',)
  // alert(_id)
  setrus(new Date())
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




    <Alert severity="info" sx={{p:2}}>our guri  </Alert>

 {/* <Divider sx={{height:10}}> */}
  
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
        <Typography variant="h6">List houses</Typography>
  
        <IconButton onClick={ToggleDailog}>
<ControlPointIcon sx={{color:"primary.main",fontSize:'50px'}}/>
        </IconButton>
    </Box>




   {/* {mytext feilds} */}
<Dialog open={dailogOpen} onClose={ToggleDailog}>

  <DialogTitle>New guryaha</DialogTitle>
  <Box  component={"form"} onSubmit={handleSubmit(newCLIENTS)}>
   <DialogContent>

   <Box sx={{width:'380px',mt:2}}> 
<Stack spacing={2} direction={"column"}>
<Box>
{/* <TextField
   label="Housetype" variant="outlined" {...register('Housetype',{required:true})}size="small"fullWidth
         /> */}
         {/* {errors.Housetype && <Typography sx={{color:'red'}}>please select type</Typography>} */}
         <Box>

         <InputLabel id="demo-simple-select-autowidth-label" label='Housetype'  {...register('Housetype',
         {required:true})} > select house type</InputLabel>
        
        {/* <Select > */}
       
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">house_Type</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Housetype" {...register('Housetype',
         {required:true})}>
          <MenuItem value="">
            
          </MenuItem>
          <ListSubheader>house type</ListSubheader>
          <MenuItem value='villa'>villa</MenuItem>
          <MenuItem value='biyana'>biyana</MenuItem>
          <MenuItem value='dabaq'>dabaq</MenuItem>
          <ListSubheader>qeybta yar</ListSubheader>
          <MenuItem value='bacweyne'>bacweyne</MenuItem>
          <MenuItem value='jingad'>jingad</MenuItem>
          <MenuItem value='carish'>carish</MenuItem>
        </Select>
      </FormControl>
         
        {/* </Select> */}
        {errors.Housetype && <Typography sx={{color:'red'}}>please select type</Typography>}
         </Box>
</Box>
{/* // */}
<Box>
<TextField
   label="area" variant="outlined" {...register('area',{required:true})}size="small"fullWidth
         />
         {errors.area && <Typography sx={{color:'red'}}>please enter area</Typography>}
</Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="adress"{...register('adress',{required:true})} size="small"fullWidth
    
    />
         {errors.adress && <Typography sx={{color:'red'}}>please enter adress</Typography>}
       </Box>
       <Box>
<TextField
   label="age" variant="outlined" {...register('age',{required:true})}size="small"fullWidth
         />
         {errors.age && <Typography sx={{color:'red'}}>please enter age</Typography>}
</Box>

<Box>
<TextField
   label="deposit" variant="outlined" {...register('deposit',{required:true})}size="small"fullWidth
         />
         {errors.deposit && <Typography sx={{color:'red'}}>please enter deposit</Typography>}
</Box>
<Box>
<TextField
   label="rent" variant="outlined" {...register('rent',{required:true})}size="small"fullWidth
         />
         {errors.rent && <Typography sx={{color:'red'}}>please enter rent</Typography>}
</Box>
<Box>
<TextField
   label="parking" variant="outlined" {...register('parking',{required:true})}size="small"fullWidth
         />
         {errors.parking && <Typography sx={{color:'red'}}>please enter parking</Typography>}
</Box>
<Box>
<TextField
   label="imagepreview" variant="outlined" {...register('imagepreview',{required:true})}size="small"fullWidth
         />
         {errors.imagepreview && <Typography sx={{color:'red'}}>please enter imagepreview</Typography>}
</Box>
<Box>
<TextField
   label="rooms" variant="outlined" {...register('rooms',{required:true})}size="small"fullWidth
         />
         {errors.rooms && <Typography sx={{color:'red'}}>please enter rooms</Typography>}
</Box>
<Box>
<TextField
   label="pathrooms" variant="outlined" {...register('pathrooms',{required:true})}size="small"fullWidth
         />
         {errors.pathrooms && <Typography sx={{color:'red'}}>please enter pathrooms</Typography>}
</Box>
<Box>
<TextField
   label="masterRooms" variant="outlined" {...register('masterRooms',{required:true})}size="small"fullWidth
         />
         {errors.masterRooms && <Typography sx={{color:'red'}}>please enter masterRooms</Typography>}
</Box>
<Box>
<TextField
   label="description" variant="outlined" {...register('description',{required:true})}size="small"fullWidth
         />
         {errors.description && <Typography sx={{color:'red'}}>please enter description</Typography>}
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

<ErrorOutlineOutlined sx={{fontSize:"60px" }} />
<Typography sx={{color:'red'}} >Data not found it !!</Typography>
    </Box>

   </Box>): isLoading ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>
    <Box>
   <CircularProgress sx={{fontSize:"60px" }}/>
<Typography >Loading...</Typography>
    </Box>
   </Box>) : <Guryahalist  GuryahaData={client?.data} guryahaUpdate={UpdateClientInfo} GuryhaDelete={deletes} />}
  {/* //  <Box>

  //  </Box> */}
   {/* {clients ? <ClientList clientData={clients} clientDelete={deletes} clientsUpdate={UpdateClientInfo}/> : null } */}
    </Box>
    </>
}