import { useReducer, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import { AuthProvider } from './components/Authcontext' 
import { useContext } from 'react'
import { themeContext } from './themeProvider'
import { Provider } from 'react-redux'
import Store from './store/Store'
import Cards from './pages/Cards'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Badge } from '@mui/material'
import CardsDetailes from './components/Addtocart/CardDetailes'

const Routing=()=>{
  return(
    <>
  <Routes>
  <Route path='/' element={ <Homepage/>}></Route>
  <Route path='/menu' element={ <Cards/>}></Route>
  <Route path='/signup' element={ <Signup/> }></Route>
  <Route path='/login' element={ <Login/> }></Route>
  <Route path='/homepage' element={<Homepage/>}></Route>
  <Route path='/cart/:id' element={<CardsDetailes/>}></Route>
  <Route path='*' element={<h1>404 not found</h1>}></Route>

 </Routes>
 <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  </>
  );
}
const App=()=>{
  const { theme, toggleTheme } = useContext(themeContext)

  
return (
    <>
     
    <AuthProvider>
      <Provider store={Store}>
      <Navbar />
     
  <Routing/>
  {/* <Cards/> */}
  </Provider>
</AuthProvider>

    </>
);
}

export default App
