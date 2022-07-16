import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { People, Home } from './routes';

/*
  make sure to install the latest version of react-router-dom
  npm install react-router-dom@6
*/

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/people')
      .then(res => res.json())
      .then(data => setPeople(data));
  }, []);

  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> | <Link to="/people">People</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<People people={people} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
