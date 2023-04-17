// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import MuiNavbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;
