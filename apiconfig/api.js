import axios from "axios"

export  const api=axios.create({
 baseURL:import.meta.env.VITE_APP_API_URL,
//https://betahouseapi.vercel.app/
// baseURL:'https://betahouseapi.vercel.app/'

})
