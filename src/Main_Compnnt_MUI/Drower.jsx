import React, { useState } from 'react'
import { Box, Drawer,IconButton,List, ListItem, ListItemButton, ListItemIcon, ListItemText,  } 
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Drowers =() =>{
 const[openside,setopen]=  useState(false) 
 
  return (
//    <Box>

//    </Box>
<React.Fragment>
    <Drawer open={openside}
    onClose={()=>setopen(false)}
    >
<List>
    <ListItemButton>
<ListItemIcon>
    <ListItemText> Sidebar</ListItemText>
    
</ListItemIcon>

    </ListItemButton>
    
</List>

    </Drawer>
    <IconButton  sx={{color:'whitesmoke' ,marginLeft:'auto'} }  onClick={()=>setopen(!openside)}>
<MenuIcon/>
    </IconButton>
   
</React.Fragment>
  )
}

export default Drowers