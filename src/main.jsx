import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import { createTheme ,ThemeProvider} from '@mui/styled'

import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider ,createTheme} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient()
//quer clients==
const theme = createTheme({
  
  palette: {
    primary: {
      main:'#9c27b0',    
      dark:'#a31545',
      light:"#ed4b82"
    },    
    error:{
      main:"#E50F0C",
      warning:"#E75E06",
      dark:'#145A32',
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

<ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    <ToastContainer />
    </BrowserRouter>
    </ThemeProvider>

    </QueryClientProvider>
  </React.StrictMode>
)
