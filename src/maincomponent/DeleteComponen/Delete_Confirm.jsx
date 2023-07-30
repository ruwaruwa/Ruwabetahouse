import React from 'react'
import { QuestionMarkOutlined } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'

export default function Delete_Confirm({message,OPEn,TOGELER,confirm}) {
  return (
 <>
 <Box>
 <Dialog open={OPEn} onClose={TOGELER}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <Box  >
        <DialogContent>
        <Box sx={{width:"300px",display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}} mt={2} >



<Stack  spacing={2} direction={'column'}>
<QuestionMarkOutlined sx={{fontSize:"40px",bgcolor:'primary.main',color:'white',borderRadius:'100%',p:2,alignSelf:'center' , textAlign:'center'} }/>



<Typography variant='h5' > are you sure to delete ? </Typography>

<Typography >{message}</Typography>
    
    </Stack>

    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={TOGELER}>Cancel</Button>
          <Button variant="contained" onClick={confirm}  sx={{bgcolor:"primary.main"}}   size="small">

              Yes
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>
 </Box>
 </>
  )
}
