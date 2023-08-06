import { Box, TextField, Typography, Button, Divider, Alert, Stack } from '@mui/material';
// import React from 'react'

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Addnew, Getall } from '../../SHared/Apiconfig'
import { Addquery } from '../../SHared/ReactQuery'
import { toast } from 'react-toastify'
export default function Myhomes() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm();


      useEffect(() =>{
        const XOGTa_shirkada=async()=>{
            const {data}= await Getall('/shirkada')
            console.log(data)
            //console.log(data.data[0]?._id)
            setValue('name',data[0]?.name)
            // setValue(data[0]?.name)
            setValue('location',data[0]?.location)
            setValue('logo',data[0]?.logo)
            setValue('email',data[0]?.email)
            setValue('address',data[0]?.address)
            setValue('phone',data[0]?.phone)
            // setValue('',data[0]?.phone)
            setValue('facebook',data[0]?.facebook)
            setValue('tiktok',data[0]?.tiktok)
            setValue('twitter',data[0]?.twitter)
            setValue('Instigram',data[0]?.Instigram)
            setValue('her_title',data[0]?.her_title)
            setValue('hero_img',data[0]?.hero_img)
            setValue('hero_description',data[0]?.hero_description)
            setValue('footer_Text',data[0]?.footer_Text)

          //  console.log(data._id)
          }
          XOGTa_shirkada()
      
    },[])
      // add data
  const { mutateAsync } = Addquery('/shirkada', 'shirkada');

  const myshirkada = async (value) => {
    try {
      await mutateAsync(value).then(() => {
        toast.success('data added successfully');
      });
      // console.log(value._id)
    } catch (error) {
      toast.error(error.message);
    }
  };


    
  return(
    <>  
      <Box sx={{p:2,justifyContent:'center'}}>
     
        <Box>
        <Alert > New Homeseting </Alert>
         
       
        </Box>
    
      
     <Box  component={"form"} onSubmit={handleSubmit(myshirkada)}>
     <Button type='submit' variant='contained' size='medium'sx={{marginLeft:70,mt:1}} >
                       {' '}
                       Submit
                     </Button>
                     <Stack mt={2} spacing={4} direction={'column'}>
     

<Stack spacing={4} direction={"row"}>

<TextField
   placeholder="name" variant="outlined" {...register('name',{required:true})} size="small"fullWidth
         />
         {errors.name && <Typography sx={{color:'red'}}>please enter name</Typography>}




<TextField
   placeholder="location" variant="outlined" {...register('location',{required:true})}size="small"fullWidth
         />
         {errors.location && <Typography sx={{color:'red'}}>please enter location</Typography>}

</Stack>


       <Stack direction='row' spacing={4}>

    
       <TextField
      
      variant="outlined"
      placeholder="logo"{...register('logo',{required:true})} size="small"fullWidth
    
    />
         {errors.logo && <Typography sx={{color:'red'}}>please enter logo</Typography>}
    
<TextField
   placeholder="email" variant="outlined" {...register('email',{required:true})}size="small"fullWidth
         />
         {errors.email && <Typography sx={{color:'red'}}>please enter email</Typography>}

       </Stack>

  <Stack direction='row' spacing={4}>
  

<TextField
   placeholder="address" variant="outlined" {...register('address',{required:true})}size="small"fullWidth
         />
         {errors.address && <Typography sx={{color:'red'}}>please enter address</Typography>}


<TextField
   placeholder="phone" variant="outlined" {...register('phone',{required:true})}size="small"fullWidth
         />
         {errors.phone && <Typography sx={{color:'red'}}>please enter phone</Typography>}

  </Stack>



<Stack direction='row' spacing={4}>

<TextField
   placeholder="facebook" variant="outlined" {...register('facebook',{required:true})}size="small"fullWidth
         />
         {errors.facebook && <Typography sx={{color:'red'}}>please enter facebook</Typography>}

<TextField
   placeholder="tiktok" variant="outlined" {...register('tiktok',{required:true})}size="small"fullWidth
         />
         {errors.tiktok && <Typography sx={{color:'red'}}>please enter tiktok</Typography>}

</Stack>

<Stack direction='row' spacing={2}>

<TextField
   placeholder="twitter" variant="outlined" {...register('twitter',{required:true})}size="small"fullWidth
         />
         {errors.twitter && <Typography sx={{color:'red'}}>please enter twitter</Typography>}


<TextField
   placeholder="Instigram" variant="outlined" {...register('Instigram',{required:true})}size="small"fullWidth
         />
         {errors.Instigram && <Typography sx={{color:'red'}}>please enter Instigram</Typography>}

</Stack>

<Stack direction='row' spacing={4}>

<TextField
   placeholder="her_title" variant="outlined" {...register('her_title',{required:true})}size="small"fullWidth
         />
         {errors.her_title && <Typography sx={{color:'red'}}>please enter her_title</Typography>}

<TextField
   placeholder="hero_img" variant="outlined" {...register('hero_img',{required:true})}size="small"fullWidth
         />
         {errors.hero_img && <Typography sx={{color:'red'}}>please enter hero_img</Typography>}

</Stack>
<Divider/>
<Stack direction='row' spacing={5}>

<TextField
   placeholder="hero_description" variant="outlined" {...register('hero_description',{required:true})}size="small"fullWidth
         />
         {errors.hero_description && <Typography sx={{color:'red'}}>please enter hero_description</Typography>}

<TextField
   placeholder="footer_Text" variant="outlined" {...register('footer_Text',{required:true})}size="small"fullWidth
         />
         {errors.footer_Text && <Typography sx={{color:'red'}}>please enter footer_Text</Typography>}

</Stack>





  
    </Stack>

    </Box>
    </Box>
    </>
  )
}
