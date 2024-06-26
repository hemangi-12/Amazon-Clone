
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signup from './components/signup_sign/SignUp';
import Sign_in from './components/signup_sign/Sign_in';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes,Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData]=useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setData(true)

    },2000)
  },[])
  return (
    <>
    {
      data ? (
        <>
         <Navbaar />
    <Newnav />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/getproductsone/:id" element={<Cart />} />
      <Route path="/buynow" element={<Buynow />} />
    </Routes>
    <Footer />
    </>
      
      ):(
        <div className='circle'>
          <CircularProgress />
          <h2>Loading</h2>
        </div>
      )
    }
    </>
  )
}
   
  


export default App;
