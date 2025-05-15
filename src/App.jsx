
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Fulltime from './Fulltime';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
function App() {
  

  return (
    <>

   <div className='pages'>
    <NavLink to='/'>Fulltime</NavLink>
    <NavLink to='/about'>Stopwatch</NavLink>
    <NavLink to='/workexamples'>Timer</NavLink>
   </div>


      <Routes>
        <Route path='/' element={<Fulltime />} />
        <Route path='/about' element={<Stopwatch />} />
        <Route path='/workexamples' element={<Timer />} />
      </Routes>
    </>
  )
}

export default App
