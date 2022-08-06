import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import Blogs from './pages/Blogs/Blogs';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>

      </Routes>
    </div>
  );
}

export default App;
