import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Movie } from './Movie';


import { Details } from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Movie/>}/>
    <Route path='/details/:id' element={<Details/>}/>

   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();