import React from 'react'
import { api } from '../../../apiconfig/api'

export  const GetAbout= async() =>{
  return await api.get('/about')
}
export  const Getone= async(id) =>{
    return await api.get(`/about/${id}`)
  }
  export  const adAbouts= async(data) =>{
    return await api.post('/about',data)
  }
  export  const updatAbout= async(id,data) =>{
    return await api.put(`/about/${id}`,data)
  }
  export  const DeleteAbout= async(id) =>{
    return await api.delete(`/about/${id}`)
  }
  
