import { Box, Button, Input } from '@mui/material';
import React from 'react'
import { Label } from '@mui/icons-material';
import { useState ,useEffect} from 'react';
import {ref,uploadBytes,getDownloadURL,listAll}from 'firebase/storage'
import { storage } from './Firebase';
export default function Imgfolder() {

//     const allInputs = {imgUrl: ''}
//     const [imageAsFile, setImageAsFile] = useState('')
//     const [imageAsUrl, setImageAsUrl] = useState(allInputs)
//     console.log(imageAsFile)
//  const handleImageAsFile = (e) => {
//       const image = e.target.files[0]
//       setImageAsFile(imageFile => (image))

    
    
//   }
//   const handleFireBaseUpload = e => {
//     e.preventDefault()
//   console.log('start of upload')
//   // async magic goes here...
//   if(imageAsFile === '' ) {
//     console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)


//   }
//   const storeref = ref(storage,`/images/${imageAsFile.name}`)
//   const uploadTask = uploadBytesResumable(storeref,imageAsFile)
//   //
//    //initiates the firebase side uploading 
//    uploadTask.on('state_changed', 
//    (snapShot) => {
//      //takes a snap shot of the process as it is hadi dhaco
//      console.log(snapShot)
//    }, (err) => {
//      //catches the errors ikeyneyso
//      console.log(err)
//    }, () => {
    
//      // gets the download url then sets the image from firebase as the value for the imgUrl key:
//     getDownloadURL(uploadTask.snapshot.ref)   
   
//       .then(fireBaseUrl => {
//         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        
//       })
//    })
  
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
    useEffect(()=>{
        listAll(imageLisREF).then((response)=>{
           // console.log(response)
           response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setimageslistst((prev)=>[...prev,url])
            })
           })
        })
    },[])
  
  return (
    <>
    <Box>
    <div>
           <input type="file" onChange={(event)=>{setuploadimages(event.target.files[0])}}accept="/image/*" />
           <button onClick={UploImages}>Upload to Firebase</button>
            <p> "% done"</p>
            {imageslist.map((url,index)=>{
                return<div key={index}>
                    <img src={url}/>
                    </div>
            })}
        </div>
    </Box>
    </>
   
  )
}
