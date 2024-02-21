import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
