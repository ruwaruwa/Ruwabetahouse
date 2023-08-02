import { Box } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import{Getall,Addnew,updates,Deletes} from './Apiconfig'
import { toast } from 'react-toastify'


// export const  getallQuery=() =>{
    // 
    // const{data:Aboutdata,isLoading,isError}=useQuery({
    //     queryKey:[endpoint],
    //     queryFn:async()=> await Getall()


    ////////text step
    export const getAllquery=(endpoint,querykey)=>{
        return useQuery({
            queryKey:[querykey],
            queryFn:()=> Getall(endpoint),
            onError:(e)=>{
                toast.error('sory lama kenin',e)
            }
        })
    }

//post
   export const Addquery=(endpoint,querykey)=>{
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn:(data)=>Addnew(endpoint,data),
        onSuccess:()=>{
            queryclient.invalidateQueries({queryKey:[querykey]})
            toast.success('wala save data data')
        },
        onError:(e)=>{
            toast.error('soryy data HAS not saveD !! ',e)
        }
    })
   }
///update
export const Updatequery=(endpoitn,querykey)=>{
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn:(data)=> updates(endpoitn,data),
        onSuccess:() =>{
queryclient.invalidateQueries({queryKey:[querykey]})

toast.success('data has been updated !!')
        },
        onError:(err)=>{
            toast.error(' sorry err ayaa dhacay  ',err)
        }
    })
}
///deletes
export const DeleteQuery=(endpoint,queryKey)=>{
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn:(data)=>Deletes(endpoint,data),
        onSuccess:()=>{
            queryclient.invalidateQueries({queryKey:[queryKey]})
          
            toast.success('successfully deleted !!')
        },
        onError:(e)=>{
            toast.error('sorry err aya jiro',e)
        }
    })
}
