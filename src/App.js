import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar';
import Home from './components/images/Home';
import AboutUs from './components/images/AboutUs';
import ContactUs from './components/images/ContactUs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {<Home />}
        {<AboutUs />}
        {<ContactUs />}
      </Router>
    </>
  );
}

export default App;
