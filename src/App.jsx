import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/about';
import Contact from './pages/contacts';
import Staff from './pages/staff';
import SignUp from './pages/signup';
import About from './pages/about'
import Calendar from './pages/calendar'
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';

function App() {
  return (
    useEffect(() => {
      document.title = 'Школа гимнастики Звездочка'
    },[]),
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/staff' element={<Staff/>} />
      <Route path='/calendar' element={<Calendar/>} />
      <Route path='/sign-up/*' element={<SignUp/>} />

    </Routes>
    </>
  );
}

export default App;

