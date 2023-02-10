import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Flixit from './pages/Flixit';
import Login from './pages/Login';
import Player from './pages/Player';
import Signup from './pages/Signup';
import Movies from './pages/Movies';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/player' element={<Player/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/' element={<Flixit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App