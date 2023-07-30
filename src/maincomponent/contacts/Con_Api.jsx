import React from 'react'
import { api } from '../../../apiconfig/api'

export  const GetAllContact= async() =>{
  return await api.get('/contact')
}
export  const Getone= async(id) =>{
    return await api.get(`/contact/${id}`)
  }
  export  const adContact= async(data) =>{
    return await api.post('/contact',data)
  }
  export  const updatContact= async(id,data) =>{
    return await api.put(`/contact/${id}`,data)
  }
  export  const DeleteContact= async(id) =>{
    return await api.delete(`/contact/${id}`)
  }
  
