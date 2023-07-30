import { Box, IconButton } from '@mui/material'
import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
//import { updatteService } from './allCruidapi';
import { DriveFileMoveOutlined } from '@mui/icons-material';
import EditOffIcon from '@mui/icons-material/EditOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ServiceList({SERVICEDATA,serviceDELETE,serviceUPdate}) {
console.log(SERVICEDATA)

//console.log(SERVICEDATA)
    const columns = [
        {field:'_id', headerName: 'ID', width: 90 },
        {
          field:'title',
          headerName:'title',
          width: 150,
          editable: true,
        },
        {
          field:'description',
          headerName:'description',
          width:150,
          editable: true,
        },
        {
            field:'icon',
            headerName:'icon',
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

    <IconButton onClick={()=>serviceUPdate(params.row)}>
    <EditIcon sx={{color:'blue'}} ></EditIcon>
    
    </IconButton>
    <IconButton onClick={()=>serviceDELETE(params.row)}>
    <DeleteIcon sx={{color:'green'}}></DeleteIcon>
    </IconButton>

    </Box>
    
          }
        },
        
      ];

      ////// rowes

      const rows = SERVICEDATA ? SERVICEDATA :null
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
