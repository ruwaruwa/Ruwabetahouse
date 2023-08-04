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
  // const itemData = [
  //   {
  //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //     title: 'Breakfast',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //     title: 'Burger',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //     title: 'Camera',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //     title: 'Coffee',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //     title: 'Hats',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //     title: 'Honey',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //     title: 'Basketball',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //     title: 'Fern',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //     title: 'Mushrooms',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //     title: 'Tomato basil',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //     title: 'Sea star',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //     title: 'Bike',
  //   },
  // ];

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

            </CardMedia>
            <img src={url}/>
           
        
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
