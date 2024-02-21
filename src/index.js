import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import { Movie } from './Movie';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Details } from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
=======
import reportWebVitals from './reportWebVitals';
import { Resgister } from './Resgister';
import { Login } from './Login';
import { Form } from 'react-bootstrap';
import { Home } from './Home';
import { View } from './View';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigation } from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store'
import { Provider } from 'react-redux'
>>>>>>> e6b1d803f4086f6fbb8d461652672f5ed5086063

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Movie/>}/>
    <Route path='/details/:id' element={<Details/>}/>

   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Navigation/>}>     
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Resgister />} />
          <Route path="/View" element={<View/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
  </Provider>

    

  </React.StrictMode>
);

reportWebVitals();
>>>>>>> e6b1d803f4086f6fbb8d461652672f5ed5086063
