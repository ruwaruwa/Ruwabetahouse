

import { AddCircleOutline, AddHomeWork, ErrorOutlineOutlined, } from "@mui/icons-material";
import { Alert, Box, Breadcrumbs, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Stack ,Typography} from "@mui/material"
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
import { useDeletehock } from "../DeleteHoks/Deletehock";
import Delete_Confirm from "../DeleteComponen/Delete_Confirm";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import{Getall,Addnew,updates,Deletes} from '../../SHared/Apiconfig'

import{getAllquery,Addquery,Updatequery,DeleteQuery} from  '../../SHared/ReactQuery'
import Guryahalist from "./Guryahalist";
export const Guryaha=()=>{

  const [dailogOpen,setDailog]=useState(false)

  const {register,setValue,reset,handleSubmit,formState:{errors}}=useForm()
  const ToggleDailog = ()=>{
      setDailog(!dailogOpen)
  }
  const [DELETCLIENT,setcldeleteid]=useState('')
  
 
const [rus,setrus]=useState(new Date())
const[edit,setid]=useState('')



//use query manages
const {data:Guryha,isLoading,isError}=getAllquery('/guryaharout','guryaharout')

/////post


////////////////////post new eh last isku day
const {mutate,isLoading:mutateloading}=Addquery('/guryaharout','guryaharout')


 

/////////une updates

const{mutate:updatemutate,isLoading:updateloading}=Updatequery(`/guryaharout/${edit}`,'guryaharout')


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

      setid(data._id)
      // console.log('woo wada',edit)
      ToggleDailog()
      // setReset(new Date())
    
  }
  
  //delete sections

///dete
const {mutate:deletemutate,}=DeleteQuery(`/guryaharout/${DELETCLIENT}`)
//delete hoks
const delethok= useDeletehock()
const deleteCHeck=()=>{
  deletemutate(DELETCLIENT)
  delethok.TOggle()
 
}

////
const deletes = async (data) =>{
  // await delclinets()
  delethok.setmessage(data.Housetype)

delethok.TOggle()

 setcldeleteid(data._id)
  // console.log('deleted',)
  // alert(_id)
  setrus(new Date())
}

    return<>
   <Box sx={{p:2}}>
<Delete_Confirm OPEn={delethok.OPEns} TOGELER={delethok.TOggle}message={delethok.message}confirm={deleteCHeck} />





    <Alert severity="info" sx={{p:2}}>Our GURYAHA  </Alert>

 {/* <Divider sx={{height:10}}> */}
  
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
        <Typography variant="h6">List GURYAHA</Typography>
  
        <IconButton onClick={ToggleDailog}>
<AddCircleOutline sx={{color:"primary.main",fontSize:'50px'}}/>
        </IconButton>
    </Box>




   {/* {mytext feilds} */}
<Dialog open={dailogOpen} onClose={ToggleDailog}>

  <DialogTitle>New gellary</DialogTitle>
  <Box  component={"form"} onSubmit={handleSubmit(newCLIENTS)}>
   <DialogContent>

   <Box sx={{width:'380px',mt:2}}> 
<Stack spacing={2} direction={"column"}>
<Box>
<TextField
   label="Housetype" variant="outlined" {...register('Housetype',{required:true})}size="small"fullWidth
         />
         {errors.Housetype && <Typography sx={{color:'red'}}>please enter Housetype</Typography>}

</Box>
<Box>
       <TextField
      
      variant="outlined"
      label="area"{...register('area',{required:true})} size="small"fullWidth
    
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
      
      variant="outlined"
      label="age"{...register('age',{required:true})} size="small"fullWidth
    
    />
         {errors.age && <Typography sx={{color:'red'}}>please enter age</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="deposit"{...register('deposit',{required:true})} size="small"fullWidth
    
    />
         {errors.deposit && <Typography sx={{color:'red'}}>please enter deposit</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="rent"{...register('rent',{required:true})} size="small"fullWidth
    
    />
         {errors.rent && <Typography sx={{color:'red'}}>please enter rent</Typography>}
       </Box>
     
       <Box>
       <TextField
      
      variant="outlined"
      label="parking"{...register('parking',{required:true})} size="small"fullWidth
    
    />
         {errors.parking && <Typography sx={{color:'red'}}>please enter parking</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="imagepreview"{...register('imagepreview',{required:true})} size="small"fullWidth
    
    />
         {errors.imagepreview && <Typography sx={{color:'red'}}>please enter imagepreview</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="isAvailable"{...register('isAvailable',{required:true})} size="small"fullWidth
    
    />
         {errors.isAvailable && <Typography sx={{color:'red'}}>please enter isAvailable</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="rooms"{...register('rooms',{required:true})} size="small"fullWidth
    
    />
         {errors.rooms && <Typography sx={{color:'red'}}>please enter rooms</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="pathrooms"{...register('pathrooms',{required:true})} size="small"fullWidth
    
    />
         {errors.pathrooms && <Typography sx={{color:'red'}}>please enter pathrooms</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="masterRooms"{...register('masterRooms',{required:true})} size="small"fullWidth
    
    />
         {errors.masterRooms && <Typography sx={{color:'red'}}>please enter masterRooms</Typography>}
       </Box>
       <Box>
       <TextField
      
      variant="outlined"
      label="description"{...register('description',{required:true})} size="small"fullWidth
    
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
   </Box>) : <Guryahalist  GuryahaData={Guryha?.data} guryahaUpdate={UpdateClientInfo} GuryhaDelete={deletes} />}
  {/* //  <Box>

  //  </Box> */}
  
    </Box>
    </>
}



