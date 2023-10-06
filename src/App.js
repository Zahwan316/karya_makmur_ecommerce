import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './page/home';
import KategoriPage from './page/kategori';
import DetailPage from './page/detail';
import HasilPencarianPage from './page/hasilpencarian';
import KeranjangPage from './page/keranjang';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kategori" Component={KategoriPage} />
        <Route path="/:slug" Component={DetailPage} />
        <Route path="/search/:slug" Component={HasilPencarianPage} />
        <Route path="/keranjang" Component={KeranjangPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
