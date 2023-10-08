import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './page/home';
import KategoriPage from './page/kategori';
import DetailPage from './page/detail';
import HasilPencarianPage from './page/hasilpencarian';
import KeranjangPage from './page/keranjang';
import PembayaranPage from './page/pembayaran';
import DaftarTransaksiPage from './page/daftartransaksi';
import SettingPage from './page/settings';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kategori" Component={KategoriPage} />
        <Route path="/:slug" Component={DetailPage} />
        <Route path="/search/:slug" Component={HasilPencarianPage} />
        <Route path="/keranjang" Component={KeranjangPage} />
        <Route path="/pembayaran" Component={PembayaranPage} />
        <Route path="/daftar-transaksi" Component={DaftarTransaksiPage} />
        <Route path="/settings/:option" Component={SettingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
