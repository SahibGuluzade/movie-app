
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contactinfo from './Contactinfo';
import Workexamples from './Workexamples';
function App() {
  

  return (
    <>

   <div className='pages'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contactinfo'>ContactInfo</NavLink>
    <NavLink to='/workexamples'>Workexamples</NavLink>
   </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactinfo' element={<Contactinfo />} />
        <Route path='/workexamples' element={<Workexamples />} />
      </Routes>
    </>
  )
}

export default App
