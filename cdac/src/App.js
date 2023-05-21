// import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import About from './components/About';
import MuiNavbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theory from './components/Theory';
import Test from './components/Test';
import Simulation1 from './components/Simulation1';
import Simulation2 from './components/Simulation2';
import Theory2 from './components/Theory2';
import Home from './components/Home';
=======
import About from './components/About';
import MuiNavbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theory from './components/Theory';
import Test from './components/Test';
>>>>>>> 35355a92a874acfb03a67a12a495c83bcaeaa7f3


function App() {
  return (
    <>
    <BrowserRouter>
    <MuiNavbar/>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
<<<<<<< HEAD
        <Route path="/" element={<Home/>} />
        <Route path="/theory" element={<Theory/>} />
        <Route path="/simulation1" element={<Simulation1/>} />
        <Route path="/simulation2" element={<Simulation2/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/theory2" element={<Theory2/>} />
=======
        <Route path="/" element={<Theory/>} />
        <Route path="/test" element={<Test/>} />
>>>>>>> 35355a92a874acfb03a67a12a495c83bcaeaa7f3
      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;