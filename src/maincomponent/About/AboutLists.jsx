// import { Box, IconButton } from '@mui/material'
// import { DataGrid } from '@mui/x-data-grid';
// import React from 'react'
// import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// export const  AboutLists=({Add_aboutS,UpdateAbout,DeleteAbouts})=> {


//     const columns = [
//         {field:'_id', headerName: 'ID', width: 90 },
//         {
//           field:'full_descrip',
//           headerName:'full_descrip',
//           width: 150,
//           editable: true,
//         },
//         {
//           field:'description',
//           headerName:'description',
//           width:150,
//           editable: true,
//         },
       
//         {
//           field:'Actions',
//           headerName:'Actions',
//           width: 110,
//           editable: true,
    
//           renderCell:(params)=>{
//     return<Box>
//     {/* {///up.del buto} */}

//     <IconButton onClick={()=>UpdateAbout(params.row)}>
//     <DriveFileRenameOutlineIcon sx={{color:'blue'}} ></DriveFileRenameOutlineIcon>
    

//     </IconButton>

//     {/* <IconButton onClick={()=>serviceDELETE(params.row)}>
//     <DeleteIcon sx={{color:'green'}}></DeleteIcon>
//     </IconButton> */}

//     </Box>
 
    
//           }
//         },
        
//       ];
//       const rows= Add_aboutS ? Add_aboutS:null
//   return (
//  <>
//  <Box>
//  <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         getRowId={(row)=>row._id}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         // checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//  </Box>
//  </>
//   )
// }
