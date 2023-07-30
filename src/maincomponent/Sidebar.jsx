import { AddHomeSharp, AddHomeWork, AddIcCall, Dashboard, Gavel, HomeMax, HomeMini, Image, PhotoAlbum } from "@mui/icons-material"
import { Box, Drawer, Stack, Typography } from "@mui/material"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Link } from "react-router-dom";
import { useState } from "react";

export const Sidebar=({Droweropen,drowerclose})=>{

  const [selectedMenu,setMenu]=useState('')

  //const[]=useState('')
    return<>

    <Drawer
    open={Droweropen}
    onClose={drowerclose}> 

    <Box sx={{width:"300px"}}>
 
        <Box sx={{p:2}}>
<Stack direction={"row"} spacing={1}> 
<Box >
<AddHomeSharp sx={{color:'white', backgroundColor:'primary.dark' ,height:'40',fontSize:'45'}}/>
</Box>
<Box>
    <Typography variant="h6" sx={{color:'gre'}}>betahouse</Typography>
</Box>
</Stack>

 </Box>

        {/* {menu list} */}
        <Box>
       < Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>

            <ListItemButton>
              <ListItemIcon>
                <Dashboard/>
              </ListItemIcon>
              <ListItemText primary="Dashbourd" />
            </ListItemButton>
          </ListItem>
          {/* //// */}
 <Link to={'home'} style={{textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'home' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('home')
              drowerclose()
            }}>
              <ListItemIcon>
                <HomeMax sx={[selectedMenu==='home'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItemButton>
          </ListItem>
          </Link>

<Link to={'gellary'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'gellary' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('gellary')
              drowerclose()
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='gellary'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="gellary" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={'guryaha'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'guryaha' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('guryaha')
              drowerclose()
            }}>
              <ListItemIcon>
                <HomeMini sx={[selectedMenu==='guryaha'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="Guryaha" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={'clients'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'clients' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('clients')
              drowerclose()
            }}>
              <ListItemIcon>
                <InboxIcon  sx={[selectedMenu==='clients'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="clients" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'images'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'images' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('images')
              drowerclose()
            }}>
              <ListItemIcon>
                <PhotoAlbum sx={[selectedMenu==='images'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="images" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'service'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'service' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('service')
              drowerclose()
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='clients'&& {color:'white'}]}/>
              </ListItemIcon >
              <ListItemText primary="service" />
            </ListItemButton>
          </ListItem>
          </Link>
          

          <Link to={'About'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'About' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('About')
              drowerclose()
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='About'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          </Link>

          

          <Link to={'Contacts'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'Contacts' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('Contacts')
              drowerclose()
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='Contacts'&& {color:'white'}]} />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </ListItem>
          </Link>

         

          <Link to={'users'}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'users' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('users')
              drowerclose()
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='users'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="users" />
            </ListItemButton>
          </ListItem>
          </Link>

          

        </List>
      </nav>
      <Divider />
{/* {list menu end} */}

      {/* {big screen sixe} */}
   
   
</Box>
        </Box>

  {/* { end menu list} */}

     
            

    </Box>
    </Drawer>
       
    <Box>
        {/* big screen menu */}
       <Box sx={{width:"290px",height:"100vh",display:{
        xs:"none",
       
        md:"block"
    },borderRight:2,borderColor:"#eee"}}>

   
           
     <Box sx={{width:'200px'}}>


<Box sx={{p:4}}>
<Stack direction={"row"} spacing={1}>
<Box>
<HomeWorkIcon sx={{height:'30',color:'primary.dark',fontSize:'50px'}}/>
</Box>
<Box>
<Typography variant="h6">betahouse</Typography>
</Box>
</Stack>
</Box>
</Box>
{/* {scre big en} */}

< Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard/>
              </ListItemIcon>
              <ListItemText primary="Dashbourd" />
            </ListItemButton>
          </ListItem>
          <Link to={'home'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'home' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('home')
            
            }}>
              <ListItemIcon>
                <HomeMax sx={[selectedMenu==='home'&& {color:'white',bgcolor:{
                  bgcolor:'primary.main'
                }}]}/>
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'gellary'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'gellary' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('gellary')
           
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='gellary'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="gellary" />
            </ListItemButton>
          </ListItem>
          </Link>
<Link to={'guryaha'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton  sx={[selectedMenu === 'guryaha' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('guryaha')
             
            }}>
              <ListItemIcon>
                <HomeMini x={[selectedMenu==='guryaha'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="guryaha" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={'clients'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'clients' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('clients')
             
            }}>
              <ListItemIcon>
                <InboxIcon  sx={[selectedMenu==='clients'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="clients" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'images'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'images' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('images')
           
            }}>
              <ListItemIcon>
                <PhotoAlbum sx={[selectedMenu==='images'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="images" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'service'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'service' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('service')
             
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='clients'&& {color:'white'}]}/>
              </ListItemIcon >
              <ListItemText primary="service" />
            </ListItemButton>
          </ListItem>
          </Link>
        
          <Link to={'About'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'About' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('About')
           
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='About'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          </Link>
       
          <Link to={'Contacts'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'Contacts' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('Contacts')
         
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='Contacts' && {color:'white'}]} />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </ListItem>
          </Link>
         
          <Link to={'users'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[selectedMenu === 'users' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setMenu('users')
          
            }}>
              <ListItemIcon>
                <Image sx={[selectedMenu==='users'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="users" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </nav>
      <Divider />
{/* {list menu end} */}

      {/* {big screen sixe} */}
   
   
</Box>
</Box>

        </Box>
  </>
}