import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './pages/Header';
import Detail from './pages/Detail';
import { company, content } from './data/data';

const App = () => {
  return (
    <div>

      <Header data={company} />
      {
        content.map(it => {
          return <div key={it.id}>  <Link to={'/list/' + it.id}>{it.id}</Link></div>
        })
      }
      <Routes>
        <Route path='/list/:id' element={<Detail list={content} />} />
      </Routes>
    </div>
  )
}

export default App