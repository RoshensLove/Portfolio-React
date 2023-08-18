import './styles/main.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import Navbar from './conponents/navbar/Navbar';
import Footer from './conponents/footer/Footer';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router basename="/Portfolio-React">
          <ScrollToTop/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/project/:id' element={<Project/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
