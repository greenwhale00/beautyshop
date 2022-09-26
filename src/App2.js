import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { company, content } from './data/data';

import Header from './pages/Header';
import Detail from './pages/Detail';


const App = () => {
  return (
    <div>

      <Header />

      <Routes>
        <Route path='/list/:num' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App