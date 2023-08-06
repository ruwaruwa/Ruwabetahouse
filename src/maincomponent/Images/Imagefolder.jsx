import { Alert, Box, Button, Chip, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState ,useEffect} from 'react';
import {ref,uploadBytes,getDownloadURL,listAll}from 'firebase/storage'
import { storage } from '../../../Firebase';
//import {  } from ;
export default function Imagefolder({semore,params,row}) {

  const[imagesUpload,setuploadimages]=useState('')
  const[imageslist,setimageslistst]=useState([])
  const imageLisREF=ref(storage,"images/")
      const UploImages=()=>{
  if(imagesUpload ==null)return;
  const imagesREf=ref(storage,`images/${imagesUpload.name }`);
  uploadBytes(imagesREf,imagesUpload).then(()=>{
      alert('images uploaded')
  })
      };
  
  const{id,Housetype}=useParams()

  //   

  useEffect(()=>{
    listAll(imageLisREF).then((response)=>{
       // console.log(response)
       response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
            setimageslistst((prev)=>[...prev,url])
        })
       })
    })
},[]);


  return (
<>
<Box>
<Alert severity='info'>
Type:{Housetype} {" "}  {" "} Ref ID: {" "} {id}
</Alert>
<Stack direction={'row'} spacing={2}>
<TextField fullWidth type='file' size='small' variant='outlined' onChange={(event)=>{setuploadimages(event.target.files[0])}}/>
<Button onClick={UploImages} variant='contained' size='small'>Upload</Button>
</Stack>

<Divider sx={{height:20}}>
<Box  >
 
  <Grid container spacing={2} >

<Card sx={{maxWidth:4000,mt:4}}>

<Grid container spacing={2}>

{imageslist.map((url, index) => {

    return <Grid url xs= {12} sm={12} md={6} lg={4}> 
    <Card sx={{ maxWidth: 4000 }}>
        <CardMedia
            key={index}
            sx={{ height: 140 }}>
   <img src={url}/>
            </CardMedia>
         
           
        
        <CardContent>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography variant="body2" color="text.secondary">
             
            </Typography>
            {/* <Chip label="See More" size="small" variant="outlined"  /> */}
            </Box>
        </CardContent>
        <CardActions>
            <Button size="small">Delete</Button>

        </CardActions>
        </Card>
    </Grid>

})}
</Grid>
</Card>
  
 
</Grid>


</Box>
</Divider>
</Box>
</>
 
  )
}
