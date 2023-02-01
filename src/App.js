import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/loginpage' element={<Login/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
