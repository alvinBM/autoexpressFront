import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Catalogue from './pages/Catalogue';
import {Provider} from "react-redux";
import store from "./redux/store";
import Panier from './pages/Panier';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Catalogue />} />
            <Route path='/panier' element={<Panier />} />
          </Routes>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

