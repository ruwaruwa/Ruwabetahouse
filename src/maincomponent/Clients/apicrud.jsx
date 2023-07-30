import { api } from "../../../apiconfig/api";

import React from 'react'
/* 
wxaa halkan nogu qoran
all api get,getbyeid,
post,update,delete

*/

export  const getallClients=async()=> {
  return await api.get('/clients')
  
}

export  const getclinetsBYid=async(id)=> {
    return await api.get(`/clients/${id}`)
  }
  export  const Addclients=async(data)=> {
   
    return await api.post('/clients',data)
  }
  export  const updateClients=async(id,data)=> {
    return await api.put(`/clients/${id}`,data)
  }
  export  const delclinets=async(id)=> {
    return await api.delete(`/clients/${id}`)
  }