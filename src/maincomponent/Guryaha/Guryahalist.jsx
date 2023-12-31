
import { DataGrid } from "@mui/x-data-grid";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
//import { Box } from '@mui/material';
import { DriveEtaOutlined } from '@mui/icons-material';
import { AdUnits, Label } from '@mui/icons-material';
import { Box, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
//import { DataGrid } from '@mui/x-data-grid';
// import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Guryahalist({GuryahaData,guryahaUpdate,GuryhaDelete}) {
 

   const [Dilogopen, setOpendilog] = useState(false);
      const[datada,setdatada]= useState()
  
     // console.log(clientData)
     const Toggales=()=>{
      setOpendilog(!Dilogopen)
  }

  const semore=(data)=>{
      setdatada(data)
      Toggales()
// console.log(data)
console.log(datada)
Toggales()
  }  
    const columns = [
        // {field:'_id', headerName: 'ID', width: 90 },
        {
          field:'Housetype',
          headerName:'Housetype',
          width: 150,
          editable: true,
          renderCell:(params)=>{
            // <Chip label="Chip Filled" />
         
            return <Box>
              {params.row.Housetype}{" "}
            <Chip label="see more" onClick={()=>semore(params.row)} variant='outlined' />
    {/* <Chip size='small' label="see more" clickable={()=>semore(params.row)}variant='outlined' /> */}
    </Box>
          }
        },
        {
          field:'adress',
          headerName:'adress',
          width:150,
          editable: true,
        },
        {
            field:'area',
            headerName:'area',
            width:150,
            editable: true,
          },
          {
            field:'age',
            headerName:'age',
            width:150,
            editable: true,
          },
          // {
          //   field:'deposit',
          //   headerName:'deposit',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'rent',
          //   headerName:'rent',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'parking',
          //   headerName:'parking',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'imagepreview',
          //   headerName:'imagepreview',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'isAvailable',
          //   headerName:'isAvailable',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'rooms',
          //   headerName:'rooms',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'pathrooms',
          //   headerName:'pathrooms',
          //   width:150,
          //   editable: true,
          // },
          // {
          //   field:'masterRooms',
          //   headerName:'masterRooms',
          //   width:150,
          //   editable: true,
          // },

          // {
          //   field:'description',
          //   headerName:'description',
          //   width:150,
          //   editable: true,
          // },
          {
            field:'Actions',
            headerName:'Actions',
            width: 110,
            editable: true,
      
            renderCell:(params)=>{
      return<Box>
      {/* {///up.del buto} */}
      <IconButton onClick={()=>guryahaUpdate(params.row)}>
      <EditIcon sx={{color:'blue'}}/>
      
      </IconButton>
      
      <IconButton onClick={()=>GuryhaDelete(params.row)}>
      <DeleteSweepIcon sx={{color:'red'}}></DeleteSweepIcon>
      </IconButton>
  
      </Box>
      
            }
          },
          {
            field:'image',
            headerName:'images',
            width: 150,
            editable: true,
            renderCell:(params)=>{
              // {params.row.Housetype}
{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
   return <Link to={`/dashbord/images/${params.row._id}`}>image folder</Link>

            }
          },
          // {
          //   field:'user_id',
          //   headerName:'user_id',
          //   width:150,
          //   editable: true,
          // },
       
        
      ];
const rows=GuryahaData ? GuryahaData:null

return (
  <>  
  
 <Box >
  {/* <IconButton onClick={Toggales}>
      <AdUnits></AdUnits>
  </IconButton> */}
 <Dialog open={Dilogopen}
      onClose={Toggales}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
     
      <DialogTitle id="alert-dialog-title">
      Housetype:{" "} {datada?.Housetype}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          
<Stack direction={'column'}>
{/* <Box>
<Typography variant='h6'>Deposit: </Typography>
         <Box>
          {datada?.deposit
}
          </Box>
   </Box> */}
      <Divider/>
      {/* <Box>
<Typography variant='h6'>Amount</Typography>
         <Box>
          {datada?.rent}
          </Box>
   </Box> */}
   <Divider/>
     
   <Divider/>
      <Stack direction={'row'} spacing={2}>

<Typography variant='h5'>description: </Typography>

         <Typography variant="h5">
          {datada?.description}
          </Typography>
   </Stack>

  <Stack direction={'row'} spacing={4}>
 

<Typography variant='h5'>parking :</Typography>

         <Typography variant="h5">
          {datada?.parking}
          </Typography>

  </Stack>
      <Divider/>
      <Stack direction={'row'} spacing={4}>


<Typography variant='h5'>masterRoom :{" "}</Typography>

<><Typography variant="h6"> {datada?.masterRooms}</Typography></>

        
   </Stack>
      <Divider/>
     <Stack direction={'row'} spacing={4}>
    
<Typography variant='h5'>path rooms </Typography>
         
  
   <Typography variant="h5">{datada?.pathrooms}</Typography>
     </Stack>
      <Divider/>
      

</Stack> 
<Stack direction={'row'} spacing={2}>

<Divider/>

<Typography variant='h6'>DepositAmoun:</Typography>
        <Typography variant="h5">  {datada?.deposit}</Typography>

   <Divider/>

<Typography variant='h5'>age :</Typography>
       
        <Typography variant="h5">  {datada?.age}</Typography>
          
   
   <Divider/>

<Typography variant='h5'> Amount: </Typography>
<Typography variant="h5">
          
          {datada?.rent}
          </Typography>
</Stack>

          
        
        </DialogContentText>
      </DialogContent>
    
    </Dialog>

 <Box>
  <Box sx={{height: 400, width: '100%' }}>
<DataGrid
  rows={rows}
  columns={columns}

  getRowId={(row)=>row._id}
  initialState={{
    pagination: {
      paginationModel: {
        pageSize:5,
      },
    },
  }}
  pageSizeOptions={[5]}
 
  disableRowSelectionOnClick
/>
</Box>
  </Box>
  </Box>
  </>
  )
}
