import React from 'react'
import { api } from './../../apiconfig/api';



  export const Getall=async(endpoint,data)=>{
    return await api.get(endpoint,data)
    

}


export  const Addnew= async(endpoint,data)=>{
 return  await api.post(endpoint,data)
 
  }

  
export  const updates= async(endpoint,data)=>{
   return  await api.put(endpoint,data)
   
    }
    export  const Deletes= async(endpoint,data)=>{
      return  await api.delete(endpoint,data)
      
       }



