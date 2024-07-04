import './App.css';
import Navbar from './component/Navbar';
import PageTopLine from './component/PageTopLine';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Handroom from 'react-headroom'
import Footer from './component/Footer';

function App() {


  return (
    <>
      <BrowserRouter>

        <Handroom>
          <PageTopLine />
          <Navbar />
        </Handroom>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

