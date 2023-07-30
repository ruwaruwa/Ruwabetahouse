import { Box, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import  {Sidebar}  from './Sidebar'
import MenuIcon from '@mui/icons-material/Menu';
import { Clients } from './Clients/Client';
import { Service } from './services/Service';
import { Outlet } from 'react-router-dom';
function Dashbords() {
    const[drowperopen,setdroweropen]=useState(false)
    const togledrow=()=>{
        setdroweropen(!drowperopen)
    }
  return (
    <>
  
    <Box>
        <Stack direction={'row'}>
        <Sidebar Droweropen={drowperopen} drowerclose={togledrow}/>
      
<Box sx={{width:'100%'}}>
      {/* {content home bilw} */}
<Box sx={{bgcolor:"primary.main",color:'white',
display:"flex",
justifyContent:{
    sx:'space-between',
    md:'end'
}}} p={4}>
    <IconButton sx={{p:0,display:{
        sx:'block',
        md:'none'
    }}} onClick={()=>togledrow()}>

        <MenuIcon sx={{color:'white'}}/>
    </IconButton>

</Box>

{/* {my content pages} */}

{/* <Clients /> */}
{/* <Service /> */}
<Box sx={{p:2}}>
<Outlet/>
</Box>


</Box>
 </Stack>
    </Box>
    </>
  )
}

export default Dashbords