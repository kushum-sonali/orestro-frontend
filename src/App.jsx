import { useReducer, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import { AuthProvider } from './components/Authcontext' 
import { useContext } from 'react'

import { Provider } from 'react-redux'
import Store from './store/Store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {lazy,Suspense} from 'react'
// const Footer=lazy(()=>import('./pages/Footer'));
const Signup=lazy(()=>import('./pages/Signup'))
const Login= lazy(()=>import('./pages/Login'));
const Homepage=lazy(()=>import('./pages/Homepage'));
const Cards=lazy(()=>import ('./pages/Cards'));
const About=lazy(()=>import('./pages/About'));
const Contact=lazy(()=>import('./pages/Contact'));
const CardsDetailes=lazy(()=>import('./components/Addtocart/CardDetailes'));
const Forgetpass=lazy(()=>import('./pages/Forgetpass'));
const ResetPassword=lazy(()=>import('./pages/ResetPassword'));


const Routing=()=>{
  return(
    <>
  <Routes>
  <Route path='/' element={ <Suspense><Signup/></Suspense>}></Route>
  <Route path='/menu' element={ <Suspense><Cards/></Suspense>}></Route>
  <Route path='/signup' element={<Suspense> <Signup/> </Suspense>}></Route>
  <Route path='/login' element={ <Suspense><Login/></Suspense> }></Route>
  <Route path='/homepage' element={<Suspense><Homepage/></Suspense>}></Route>
  <Route path='/cards' element={<Suspense><Cards/></Suspense>}></Route>
  <Route path='/cart/:id' element={<Suspense><CardsDetailes/></Suspense>}></Route>
  <Route path='/about' element={<Suspense><About/></Suspense>}></Route>
  <Route path='/contact' element={<Suspense><Contact/></Suspense>}></Route>
  <Route path='/forgetpass' element={<Suspense><Forgetpass/></Suspense>}></Route>
  <Route path='/reset-password/:id/:token' element={<Suspense><ResetPassword/></Suspense>}></Route>
  <Route path='*' element={<Suspense><Homepage/></Suspense>}></Route>

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
  

  
return (
    <>
    <AuthProvider>
      <Provider store={Store}>
      <Navbar />
  <Routing/> 
  <Footer/>
  {/* <About/>
     <Cards/>
      <Contact/> */} 
  {/* <Cards/> */}
  </Provider>
</AuthProvider>

    </>
);
}

export default App
