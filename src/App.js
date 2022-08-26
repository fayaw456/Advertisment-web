import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
import AdvertiseHere from './pages/AdvertiseHere';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Sidenav/>
          <div className='container'> 
            <Routes>
            <Route  path='/'  />
            <Route  path="/home"  element={<Home></Home>} />
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
