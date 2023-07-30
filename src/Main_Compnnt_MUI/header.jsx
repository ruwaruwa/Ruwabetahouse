import React from 'react'
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography ,useMediaQuery,TextField} from '@mui/material'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { red } from '@mui/material/colors';
import Drowers from './Drower';

const color = red[500];

function Header() {
    const theme=useTheme()
    console.log(theme)
    const hadobato=useMediaQuery(theme.breakpoints.down('md'))
    console.log(hadobato)
  return (
    <React.Fragment>
         <Box sx={{}}>
         <AppBar sx={{backgroundColor:'#757ce8'}} >
         
         <Toolbar>
            <AccessibilityIcon/>
            {
                hadobato ? (
                    <>
                    <Typography>show</Typography>
                    <Drowers/>
                    </>
                ) :(
                    <>
  <Tabs sx={{marginLeft:'auto'}} textColor='#f44336'>
     <Tab   label="products"/>
     <Tab  label="security"/>
     <Tab  label="About"/>
     <Tab  label="Services"/>
     <Tab  label="Contacts"/>
     </Tabs>
     <Button sx={{marginLeft:'auto'}} variant='contained'>login</Button>
     <Button sx={{marginLeft:'10px'}} variant='contained'>sign up</Button>
                    </>
                ) 

            }
      
         </Toolbar>
       
       </AppBar>
         </Box>
      {/* /// */}

      {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' ,marginTop:'20'},
      }}
      
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="name"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="username"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="email"
          placeholder="Placeholder"
          multiline
        />
      </div>
      <div>
        
        <TextField
          id="filled-textarea"
          label="comment"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
       
      </div>
      <div>
       
       
       
      </div>
    </Box> */}

    </React.Fragment>
    
  )
}

export default Header