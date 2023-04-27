// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import MuiNavbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theory from './components/Theory';
import Test from './components/Test';


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
        <Route path="/" element={<Theory/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;
