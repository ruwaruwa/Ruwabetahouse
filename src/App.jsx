import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Box, Paper, Typography,} from '@mui/material'
import Header from './Main_Compnnt_MUI/header'
import Stack from '@mui/material/Stack';
import Dashbords from './maincomponent/Dashbord'
import { Route, Routes } from 'react-router-dom'

//import TextField from '@mui/material/TextField';
// or
//import { TextField } from '@mui/material';
import { Guryaha } from './maincomponent/Guryaha/Guryaha';
import { Clients } from './maincomponent/Clients/Client'
import { Service } from './maincomponent/services/Service'
import { About } from './maincomponent/About/About'

import { ContacTs } from './maincomponent/contacts/Contacts'
// import Images from './maincomponent/Images/images'


import Delete_Confirm from './maincomponent/DeleteComponen/Delete_Confirm'
import { Gellary } from './maincomponent/Gellary/Gellary'

import Imagefolder from './maincomponent/Images/Imagefolder'
import Notfound from '../Notfound'
//import Home from './maincomponent/home/Home'
import Myhomes from './maincomponent/home/Myhomes'
import Logn from './login/Logn'
import { Use_usercontext } from './Authentications/UseCotext'

function App() {
   const [count, setCount] = useState(0)
const {Islogin}=Use_usercontext()
  return (
    <>
       
    {/* <Header /> */}
 
  {/* <Box sx={{border:'20px',backgroundColor:'whitesmoke'}}>
<Typography color={{color:'red',fontsize:'30x'}} >welcome</Typography>
 
  </Box> */}
  {/* //Sidebar */}

{/* <Dashbords/> */}
{/* <Imagefolder/> */}
 <Routes>
  <Route path='/' element={<Logn/>}></Route>
  <Route path="*" element={<Notfound/>}></Route>
{Islogin &&
  <Route path='dashbord' element={<Dashbords/>}>
  {/* <Route path='home' element={<Home/>}></Route> */}
  <Route path='home' element={<Myhomes/>}></Route>
  <Route path='clients' element={<Clients/>} />
  <Route path='service' element={<Service/>} />
  <Route path='about' element={<About/>}></Route>
  <Route path='Contacts' element={<ContacTs/>}></Route>
  <Route path='gellary' element={<Gellary/>}></Route>
  <Route path='images/:id/' element={<Imagefolder/>}></Route>
  {/* <Route path='images' element={<Images/>}></Route>  */}
  {/* <Route path='users' element={<Images/>}></Route> */}
  {/* <Route path='home'></Route>
  <Route path='gellary'></Route> */}
  <Route path='guryaha' element={<Guryaha/>} />
  {/* <Route path='images'>login page</Route>

  <Route path='About'>login page</Route>
  <Route path='Contacts'>login page</Route>
  <Route path='users'>login page</Route> */}

  </Route>}

 </Routes>
    </>
  )
}

export default App
