import { Box, Button, Stack, Typography } from '@mui/material'
import{ React, useEffect, useState}from 'react'
import { Alert } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {getAllquery,Addquery} from '../../SHared/ReactQuery'
import{Getall} from '../../SHared/Apiconfig'
import { toast } from 'react-toastify';
export const  About=()=> {
    const [decribtion, setecribtio] = useState('');
    const [fulldescription, setfuldescription] = useState('');

    // const Update=()=>{
    //     console.log(decribtion,fulldescription)
    // }

    useEffect(()=>{
        const GETDATA= async()=>{
            const xogta= await  Getall('/about')
            setfuldescription(xogta[0]?.full_descrip)
            setecribtio(xogta[0]?.decribtion)
        }
        GETDATA()
    },[])
    //poest,updates
    const {mutateAsync}=Addquery('/about','about')

    const alldataUP=async()=>{
        const data={
            full_descrip:fulldescription,
            decribtion:decribtion
        }
        mutateAsync(data).then(()=>{
            toast.success('success fully updated')
        })
    } 
    return (
        <>
       <Box sx={{ textAlign: 'center'}}>
       <Typography variant='h5'> About List</Typography>
       <Box
          sx={{
           
            justifyContent: 'space-between',
            margin: '35px',
          }}
        >
        
  
        <Stack direction={'column'} spacing={2}>
        <Box>
    
    <Typography fontSize={'50'}>full_discribtion</Typography>
            <ReactQuill  value={fulldescription}onChange={setfuldescription}/>
    </Box>
           <Box>
           <Typography fontSize={'50'}>discribtion</Typography>
            
            <ReactQuill  value={decribtion}onChange={setecribtio}/>
           </Box>
     
           <Button sx={{color:'white',bgcolor:'primary.dark'}} onClick={()=>alldataUP()}>Save</Button>
        </Stack>
        </Box>
        
       </Box>
        </>
      );

}
