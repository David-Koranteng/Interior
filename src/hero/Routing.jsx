import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import Contact from '../components/contact';
import Details from '../components/details';
import Gallery from '../components/gallery';
import About from '../components/about';


const Routing = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        
     </Routes>
    </>
  )
}

export default Routing;
