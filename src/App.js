/* eslint-disable react/jsx-pascal-case */

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react'
import Login_form from './Folders/Login_form'
import Dashbord from './Folders/Dashbord'
import Register from './Folders/Register'
import Product from './Folders/Product';
import Album from './Folders/Album';


function App() {
  // eslint-disable-next-line no-undef
  const[islogin , setislogin] = useState(JSON.parse(localStorage.getItem('islogin')))
  return (
    <>
       <BrowserRouter>
          <Routes>
            {

              islogin ?
             ( <>
                <Route path='/' element={<Navigate to='/dashbord'/>}/>
            <Route path='/dashbord' element={<Dashbord setislogin={setislogin}/>}/>

            <Route path='/Product' element={<Product setislogin={setislogin}/>} ></Route>
           
            <Route path='/album' element={<Album setislogin={setislogin}/>} ></Route>
           
             <Route path='*'  element={<Navigate to='/dashbord'/>}></Route>
               </>):

             ( <>
                 <Route path='/' element={<Navigate to='/login'/>}/>
              <Route path='/login' element={<Login_form setislogin={setislogin}/>}/>
              <Route path='*'  element={<Navigate to='/login'/>}></Route>
              </>)


            }

             <Route path='/registration' element={<Register/>}/>
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
