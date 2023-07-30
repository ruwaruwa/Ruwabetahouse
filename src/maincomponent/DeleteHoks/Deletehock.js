
import React, { useState } from 'react'

export  const useDeletehock=()=> {
    const[OPEns,setOpen]=useState(false)
    const[message,setmessage]=useState()
    const TOggle=()=>{
        setOpen(!OPEns)
    }
  return {OPEns,TOggle,message,setmessage}
}
