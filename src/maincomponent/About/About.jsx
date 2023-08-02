import { Box, Button, Stack, Typography } from '@mui/material'
import{ React, useState}from 'react'
import { Alert } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export const  About=()=> {
    const [editorValue, setEditorValue] = useState('');
    const [fulldescription, setfuldescription] = useState('');

    const Update=()=>{
        console.log(editorValue,fulldescription)
    }
    
    return (
        <>
        <Button sx={{color:'white',bgcolor:'primary.dark'}} onClick={Update}>Save</Button>
        <Stack direction={'column'} spacing={2}>
            <Typography fontSize={'50'}>discribtion</Typography>
            
        <ReactQuill  value={editorValue}onChange={setEditorValue}/>

        <Typography fontSize={'50'}>full_discribtion</Typography>
        <ReactQuill  value={fulldescription}onChange={setfuldescription}/>
        </Stack>
        </>
      );

}
