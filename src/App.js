import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './component/Footer';
import WhatsUp from './component/WhatsUp';
import Contact from './pages/Contact';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IngoPage from './component/infoPage/InfoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <WhatsUp />

        <Routes >
          <Route path='/' element={<Home />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/get-deails-of-product' element={<IngoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

