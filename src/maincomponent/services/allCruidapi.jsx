
import { api } from '../../../apiconfig/api'


/* 
wxaa halkan nogu qoran
all api get,getbyeid,
post,update,delete

*/
export  const getservice= async()=> {
  return await api.get('/service')
}
//
export  const getONE_service= async(id)=> {
  return await api.get(`/service/${id}`)
}
//post
export  const aDSERVICE= async(data)=> {
  return await api.post('/service',data)
}
//update
export  const updatteService= async(id,data)=> {
  return await api.put(`/service/${id}`,data)
}
//delete
export  const DeletService= async(id)=> {
  return await api.delete(`/service/${id}`)
}