import React, { useEffect, useState } from 'react'
import { Addnew, Getall } from '../../SHared/Apiconfig'
import { Addquery } from '../../SHared/ReactQuery'
import { Alert, Box, Button, Card, CardContent, Divider, Stack, TextField } from '@mui/material'
import { toast } from 'react-toastify'
//import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Home() {
  const[name,setname]=useState('')
  const[location,setlocation]=useState('')
  const[logo,setlogo]=useState('')
const[emails,setemail]=useState('')
const[adrres,setadress]=useState('')
const[phones,setphone]=useState('')
const[facebooks,setfacebook]=useState('')
const[tiktok,settiktok]=useState('')
const[twitters,settwitter]=useState('')
const[Instigram,setInstigram]=useState('')
const[hertitle,sether_title]=useState('')
const[heroimg,sethero_img]=useState('')
const[herodescription,sethero_description]=useState('')
const[footerText,setfooter_Text]=useState('')

const {register,setValue,reset,handleSubmit,formState:{errors}}=useForm()

useEffect(()=>{
const XOGTa_shirkada=async()=>{
  const data= await Getall('/shirkada')
  setname(data[0]?.name)
  setlocation(data[0]?.location)
  setlogo(data[0]?.logo)
  setemail(data[0]?.email)
  setadress(data[0]?.address)
  setemail(data[0]?.email)
  setphone(data[0]?.phone)
  setfacebook(data[0]?.facebook)
  settiktok(data[0]?.tiktok)
  settwitter(data[0]?.twitter)
  setInstigram(data[0]?.Instigram)
  sether_title(data[0]?.her_title)
  sethero_img(data[0]?.hero_img)
  sethero_description(data[0]?.hero_description)
  setfooter_Text(data[0]?.footer_Text)
}
XOGTa_shirkada()
},[])
//updates hota  shirkada
const {mutateAsync}=Addquery('/shirkada','shirkada')
const allxogtashirkada= async()=>{
  const xogta={
    name:name,
    location:location,
    logo:logo,
    address:adrres,
    email:emails,
    phone:phones,
    facebook:facebooks,
    tiktok:tiktok,
    twitter:twitters,
    Instigram:Instigram,
    her_title:hertitle,
    hero_img:heroimg,
    hero_description:herodescription,
    footer_Text:footerText
  }
  mutateAsync(xogta).then(()=>{
    toast.success('data haas been fully updated !!!!')
  })
  console.log(xogta)
  try {
   
    const adtada= await Addnew('/shirkada',xogta)
    console.log(adtada)
  } catch (error) {
    console.log(error)
  }

}
// const UpdateClientInfo = async (data)=>{
// console.log(data.name)
//       setValue("name",data.name)
//       console.log(data.location)
//       setValue("location",data.location)
// console.log(data.logo)
//    setValue("logo",data.logo)
//    console.log(data.email)
//       setValue("email",data.email)
//       console.log(data.address)
//       setValue("address",data.address)
//       console.log(data.phone)
//       setValue("phone",data.phone)
//       console.log(data.facebook)
//       setValue("facebook",data.facebook)
//       console.log(data.tiktok)
//       setValue("tiktok",data.tiktok)
//       console.log(data.twitter)
//       setValue("twitter",data.twitter)
//       console.log(data.Instigram)
//       setValue("Instigram",data.Instigram)
//       console.log(data.her_title)
//       setValue("her_title",data.her_title)
//       console.log(data.hero_img)
//       setValue("hero_img",data.hero_img)
//       console.log(data.hero_description)
//       setValue("hero_description",data.hero_description)
//       console.log(data.footer_Text)
//       setValue("footer_Text",data.footer_Text)
//       setid(data._id)
//       // console.log('woo wada',edit)
//       ToggleDailog()
//       // setReset(new Date())
    
//   }
  return (
<Box>
<Alert>home lis</Alert>
<div className='bg-body shadow p-3 mb-3 bg-body-tertiary rounded w-4 content-box me-5 mt-2'style={{ marginLeft: '20%', width: '50%' }}></div>

<Card sx={{minWidth:275,alignItems:'center'}}>
  <CardContent>
<form>
<Box sx={{marginTop:2, boxSizing:2,textAlign:'center',justifyContent:'space-between'}} >

  {/* <Stack direction={'column'}>
  
  </Stack> */}
  
  <Stack direction={'row'} spacing={2}>
    
<Box>
<TextField label='enter name' name='name' variant="outlined" size='smalll'
//  value={name}
onChange={(event)=>setname(event.target.value)}/>
</Box>
<Box>
<TextField  label="enter location"name='location' variant="outlined"size='smalll' 
// value={location}
 onChange={(event)=>setlocation(event.target.value)}/>
</Box>
</Stack>
{/* /// */}
{/* <Divider>
</Divider> */}
<Stack direction={'row'} spacing={2}>


<Box>
<TextField  label="enter logo" name='logo' variant="outlined"size='smalll' fullWidth 
// value={logo} 
onChange={(e)=>setlogo(e.target.value)}/>
</Box>
<Box>
<TextField  label="enter address" name='address' variant="outlined"size='smalll' 
// value={adrres} 
onChange={(e)=>setadress(e.target.value)} fullWidth/>
</Box>
  </Stack>
  {/* //// */}
  {/* <Divider>
</Divider> */}
  <Stack direction={'row'} spacing={2}>
 
  <Box>
<TextField  label="enter email" name='email' variant="outlined"size='smalll'
//  value={emails}
  onChange={(e)=>setemail(e.target.value)}/>
</Box>
  <Box>
<TextField  label=" enter phone" name='phone' variant="outlined"size='smalll' 
//  value={phones}
 onChange={(e)=>setphone(e.target.value)}/>
</Box>
{/* <Divider></Divider> */}
{/* ///// */}


 
  </Stack>
  {/* <Divider/> */}
  <Stack direction={'row'} spacing={2}>
  <Box>
<TextField  label="enter facebook" name='facebook' variant="outlined"size='smalll' 
// value={facebooks}
 onChange={(e)=>setfacebook(e.target.value)}/>
</Box>
<Box>
<TextField  label=" enter twitter" name='wtitter' variant="outlined"size='smalll' 
// value={twitters} 
onChange={(e)=>settwitter(e.target.value)}/>
</Box>
  </Stack>
  {/* //////// */}
  {/* //// */}
  <Stack direction={'row'}spacing={2}>
  <Box>
<TextField label="enterInstigram" name='Instigram' variant="outlined"size='smalll'
//  value={Instigram} 
 onChange={(e)=>setInstigram(e.target.value)}/>
</Box>
  <Box>
<TextField  label="enter her_title" name='her_title' variant="outlined"size='smalll'
//  value={hertitle}
  onChange={(e)=>sether_title(e.target.value)}/>
</Box>
  </Stack>
  {/* //// */}
  <Stack direction={'row'} spacing={2}>
  {/* <Box sx={{display:'flex'}}> */}
  
<Box>
<TextField  label="enter hero_img"name='hero_img' variant="outlined"size='smalll'
//  value={heroimg}
  onChange={(e)=>sethero_img(e.target.value)}/>
</Box>
<Box>
<TextField  label="eneter hero_description" name='hero_description' variant="outlined"size='smalll'
//  value={herodescription} 
 onChange={(e)=>sethero_description(e.target.value)}/>
</Box> 
  {/* </Box> */}
  </Stack>

  <Stack direction={'row'} spacing={1}>
  <Box>
<TextField  label="enter footer_Text" name='footer_Text' variant="outlined"size='smalll'
//  value={footerText}
  onChange={(e)=>setfooter_Text(e.target.value)}/>

</Box>
<Box sx={{marginLeft:50}}>
<Button onClick={allxogtashirkada} sx={{bgcolor:'primary.main',color:'white',mt:2}}>save</Button>
</Box>
  </Stack>
</Box>
</form>
</CardContent>
</Card>
</Box>
  )
}
