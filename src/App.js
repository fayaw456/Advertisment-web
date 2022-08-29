import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
import AdvertiseHere from './pages/AdvertiseHere';
import AboutUs from './pages/AboutUs';
import { useEffect, useState } from 'react';

function App() {

  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Sidenav
        onCollapse={(inactive)=>{
          setInactive(inactive);
        }}
        />
          <div className={`container ${inactive ? "inactive" : ""}`}> 
          <h1>please</h1>
            <Routes>
            <Route  path='/'  />
            <Route  path='/home'  element={<Home></Home>} />
            <Route  path='/categories'  element={<Categories></Categories>} />
            <Route  path='/advertisehere'  element={<AdvertiseHere></AdvertiseHere>} />
            <Route  path='/aboutus'  element={<AboutUs></AboutUs>} />
           </Routes>
          </div>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
