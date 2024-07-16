import './App.css';
import Navbar from './component/Navbar';
import PageTopLine from './component/PageTopLine';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Handroom from 'react-headroom'
import Footer from './component/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import FilteredItems from './pages/FilteredItems';
import ProductDetailsPages from './pages/ProductDetailsPages';

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
          <Route path='/product/detailsPage/:name' element={<ProductDetailsPage />} />
          <Route path='/product/detailsPages/:id' element={<ProductDetailsPages />} />
          <Route path='/:name' element={<FilteredItems />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

