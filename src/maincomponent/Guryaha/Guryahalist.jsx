import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Box } from '@mui/material';
import { DriveEtaOutlined } from '@mui/icons-material';
export default function Guryahalist({GuryahaData,guryahaUpdate,GuryhaDelete}) {
    const seemore=(data)=>{
console.log(data)
    }
    const columns = [
        {field:'_id', headerName: 'ID', width: 90 },
        {
          field:'Housetype',
          headerName:'Housetype',
          width: 150,
          editable: true,
          renderCell:(params)=>{
            // <Chip label="Chip Filled" />
            <Chip siz='small' label="see more" variant="outlined" />
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
          {
            field:'deposit',
            headerName:'deposit',
            width:150,
            editable: true,
          },
          {
            field:'rent',
            headerName:'rent',
            width:150,
            editable: true,
          },
          {
            field:'parking',
            headerName:'parking',
            width:150,
            editable: true,
          },
          {
            field:'imagepreview',
            headerName:'imagepreview',
            width:150,
            editable: true,
          },
          {
            field:'isAvailable',
            headerName:'isAvailable',
            width:150,
            editable: true,
          },
          {
            field:'rooms',
            headerName:'rooms',
            width:150,
            editable: true,
          },
          {
            field:'pathrooms',
            headerName:'pathrooms',
            width:150,
            editable: true,
          },
          {
            field:'masterRooms',
            headerName:'masterRooms',
            width:150,
            editable: true,
          },

          {
            field:'description',
            headerName:'description',
            width:150,
            editable: true,
          },
          
        //   {
        //     field:'user_id',
        //     headerName:'user_id',
        //     width:150,
        //     editable: true,
        //   },
        {
          field:'Actions',
          headerName:'Actions',
          width: 110,
          editable: true,
    
          renderCell:(params)=>{
    return<Box>
    {/* {///up.del buto} */}
    {/* <IconButton onClick={()=>guryahaUpdate(params.row)}>
    <DriveEtaOutlined sx={{color:'blue'}} ></DriveEtaOutlined>
    
    </IconButton> */}
    
    {/* <IconButton onClick={()=>clientDelete(params.row)}>
    <DeleteSweepIcon sx={{color:'red'}}></DeleteSweepIcon>
    </IconButton> */}

    </Box>
    
          }
        },
        
      ];
const rows=GuryahaData ? GuryahaData:null

  return (
   <>
   
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
   
   </>
  )
}
