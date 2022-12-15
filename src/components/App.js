import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Single from '../pages/Single';

const App = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/single/:id' element={<Single />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
