
import { Box, IconButton } from "@mui/material"

import React from "react"
import { DataGrid } from "@mui/x-data-grid";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export default function Gellarylist({clientData,clientsUpdate,clientDelete}) {


  //console.log(clientData)

  const columns = [
    {field:'_id', headerName: 'ID', width: 90 },
    {
      field:'title',
      headerName:'title',
      width: 150,
      editable: true,
    },
    {
      field:'logo',
      headerName:'logo',
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
<IconButton onClick={()=>clientsUpdate(params.row)}>
<DriveFileRenameOutlineIcon sx={{color:'blue'}} ></DriveFileRenameOutlineIcon>

</IconButton>
<IconButton onClick={()=>clientDelete(params.row)}>
<DeleteSweepIcon sx={{color:'red'}}></DeleteSweepIcon>
</IconButton>
</Box>

      }
    },
    
  ];
  
  const rows= clientData ? clientData : null
  


{/* {clientslists ,datagridview} */}
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

 

