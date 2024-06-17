import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Homepage from './components/MenuPage/Home';
import AboutUs from './components/MenuPage/AboutUs';
import ContactUs from './components/MenuPage/ContactUs';
import Menu from './components/menu';
import Slider from './components/slider';
import Footer from './components/footer';
import Breads from './components/MenuPage/Breads';
import Pizza from './components/MenuPage/Pizzas';
import Doughnuts from './components/MenuPage/Doughnuts';
import Cake from './components/MenuPage/Cakes';
import Cupcake from './components/MenuPage/cupcake';
import Waffle from './components/MenuPage/Waffle';


function App() {
  return (
    <BrowserRouter>
      <Slider />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/breads" element={<Breads />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Doughnuts" element={<Doughnuts />} />
        <Route path="/Waffle" element={<Waffle />} />
        <Route path="/Cake" element={<Cake />} />
        <Route path="/Cupcake" element={<Cupcake />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}


export default App;
