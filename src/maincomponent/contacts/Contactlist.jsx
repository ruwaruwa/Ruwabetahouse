import { Box, IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
export const  Contactlist=({newcontacts,updateCONTACTS,delCONTAS})=> {


    const columns = [
        {field:'_id', headerName: 'ID', width: 90 },
        {
          field:'name',
          headerName:'name',
          width: 150,
          editable: true,
        },
        {
          field:'message',
          headerName:'message',
          width:150,
          editable: true,
        },
        {
            field:'phone',
            headerName:'phone',
            width:150,
            editable: true,
          },

        {
          field:'Actions',
          headerName:'Actions',
          width: 110,
          editable: true,
    
          renderCell:(params)=>{
    return<Box>
    {/* {///up.del buto} */}

    <IconButton onClick={()=>updateCONTACTS(params.row)}>
    <DriveFileRenameOutlineIcon sx={{color:'blue'}} ></DriveFileRenameOutlineIcon>
    

    </IconButton>

    {/* <IconButton onClick={()=>serviceDELETE(params.row)}>
    <DeleteIcon sx={{color:'green'}}></DeleteIcon>
    </IconButton> */}

    </Box>
 
    
          }
        },
        
      ];
      const rows= newcontacts ? newcontacts:null
  return (
 <>
 <Box>
 <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row)=>row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
 </Box>
 </>
  )
}
