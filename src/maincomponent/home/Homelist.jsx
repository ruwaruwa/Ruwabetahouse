// import { AdUnits, Label } from '@mui/icons-material';
// import { Box, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// // import React from 'react'
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
// export default function Homelist({clientData,clientsUpdate,clientDelete}) {

//     const [Dilogopen, setOpendilog] = useState(false);
//     const[datada,setdatada]= useState()

//    // console.log(clientData)

//     const Toggales=()=>{
//         setOpendilog(!Dilogopen)
//     }

//     const semore=(data)=>{
//         setdatada(data)
//         Toggales()
// // console.log(data)
// console.log(datada)
// Toggales()
//     }
    
//     const[open,setopen]=useState(false)
// const handleclick =()=>{
//     open(!setopen)
// }
//     const columns = [
//         // {field:'_id', headerName: 'ID', width: 90 },
//         {
//           field:'name',
//           headerName:'name',
//           width: 150,
//           editable: true,
//           renderCell:(params)=>{
//     return <Box>
//         <Chip label="see more" onClick={()=>semore(params.row)} variant='outlined' />
// {/* <Chip size='small' label="see more" clickable={()=>semore(params.row)}variant='outlined' /> */}
// </Box>
//           }
//         },
//         {
//             field:'location',
//             headerName:'location',
//             width: 150,
//             editable: true,
//           },
         
//         {
//           field:'logo',
//           headerName:'logo',
//           width:150,
//           editable: true,
//         },
//         {
//             field:'email',
//             headerName:'email',
//             width: 150,
//             editable: true,
//           },
//           {
//             field:'address',
//             headerName:'address',
//             width: 150,
//             editable: true,
//           },
//           {
//             field:'phone',
//             headerName:'phone',
//             width: 150,
//             editable: true,
//           },
//           {
//             // field:'image',
//             // headerName:'images',
//             // width: 150,
//             // editable: true,
// //             renderCell:(params)=>{
// // {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
// //    return <Link to={`/dashbord/images/${params._id}`}>image folder</Link>

// //             }
//           },
//         //   {
//         //     field:'tiktok',
//         //     headerName:'tiktok',
//         //     width: 150,
//         //     editable: true,
//         //   },
//     //       {
//     //         field:'twitter',
//     //         headerName:'twitter',
//     //         width: 150,
//     //         editable: true,
//     //       },
//     //       {
//     //         field:'Instigram',
//     //         headerName:'Instigram',
//     //         width: 150,
//     //         editable: true,
//     //       },
//     //       {
//     //         field:'her_title',
//     //         headerName:'her_title',
//     //         width: 150,
//     //         editable: true,
//     //       },
//     //       {
//     //         field:'hero_img',
//     //         headerName:'hero_img',
//     //         width: 150,
//     //         editable: true,
//     //       },
//     //       {
//     //         field:'hero_description',
//     //         headerName:'hero_description',
//     //         width: 150,
//     //         editable: true,
//     //       },
//     //       {
//     //         field:'footer_Text',
//     //         headerName:'footer_Text',
//     //         width: 150,
//     //         editable: true,
//     //       },
//         {
//           field:'action',
//           headerName:'action',
//           width: 110,
//           editable: true,
    
//           renderCell:(params)=>{
//     return<Box>
//     {/* {///up.del buto} */}
//     <IconButton onClick={()=>clientsUpdate(params.row)}>
//     <EditIcon sx={{color:'blue'}} ></EditIcon>
    
//     </IconButton>
//     {/* <IconButton onClick={()=>clientDelete(params.row)}>
//     <EditIcon sx={{color:'red'}}></EditIcon>
//     </IconButton> */}
//     </Box>
    
//           }
//         },
        
//       ];
      
//       const rows= clientData ? clientData : null
      
    
    
//     {/* {clientslists ,datagridview} */}
//     <>
     
//     </>
//     return (
//     <>  
    
//    <Box sx={{bgcolor:'primary.dark'}}>
//     {/* <IconButton onClick={Toggales}>
//         <AdUnits></AdUnits>
//     </IconButton> */}
//    <Dialog open={Dilogopen}
//         onClose={Toggales}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
       
//         <DialogTitle id="alert-dialog-title">
//          name:{" "} {datada?.name}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             <Box sx={{p:3}}>
// <Stack direction={'column'}>
// <Box>
// <Typography variant='h6'>textF</Typography>
//            <Box>
//             {datada?.footer_Text
// }
//             </Box>
//      </Box>
//         <Divider/>
//         <Box>
// <Typography variant='h6'>facebook</Typography>
//            <Box>
//             {datada?.facebook}
//             </Box>
//      </Box>
//      <Divider/>
//         <Box>
// <Typography variant='h6'>description</Typography>
//            <Box>
//             {datada?.hero_description}
//             </Box>
//      </Box>
//      <Divider/>
//         <Box>
// <Typography variant='h6'>imge</Typography>
//            <Box>
//             {datada?.hero_img}
//             </Box>
//      </Box>
//         <Divider/>
        

// </Stack> 
// <Stack direction={'row'} spacing={2}>
//     <Box sx={{display:'flex',gap:2}}>
// <Divider/>
//         <Box  sx={{display:'flex',gap:4}}>
       
// <Typography variant='h6'>twiter:</Typography>
//            <Box>
//             {datada?.twitter}
//             </Box>
//      </Box>
//      <Divider/>
//         <Box sx={{gap:2,display:'flex'}}>
// <Typography variant='h6'>tiktok</Typography>
//            <Box>
//             {datada?.tiktok}
//             </Box>
//      </Box>
//      <Divider/>
//         <Box  sx={{gap:2,display:'flex'}}>
// <Typography variant='h6'>her_title</Typography>
//            <Box>
//             {datada?.her_title}
//             </Box>
//      </Box>
//      </Box>
// </Stack>

//             </Box>
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
      
//       </Dialog>
//    </Box>
//    <Box>
//     <Box sx={{height: 400, width: '100%' }}>
//   <DataGrid
//     rows={rows}
//     columns={columns}

//     getRowId={(row)=>row._id}
//     initialState={{
//       pagination: {
//         paginationModel: {
//           pageSize:5,
//         },
//       },
//     }}
//     pageSizeOptions={[5]}
   
//     disableRowSelectionOnClick
//   />
// </Box>
//     </Box>
//     </>
//     )
//     return<>
    
//     </>
// }
