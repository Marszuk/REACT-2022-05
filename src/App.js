import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Regular from './components/Regular';
import Hot from './components/Hot';
import Page404 from './components/Page404';
import Navigation from './components/Navigation';
import Mem from './components/Mem'
import { useSelector } from 'react-redux';
import { selectMem } from './store/reducers/globalReducer';
import Input from './components/Input';

function App() {
 
  return( <div className="App">
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Regular/>}></Route>
      <Route path="/Hot" element={<Hot/>}></Route>
      <Route path="/input" element={<Input/>}></Route>
      <Route path="*" element={<Page404/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;