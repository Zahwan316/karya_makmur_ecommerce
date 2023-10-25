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
import ListSemuaBarangComponent from './page/listbarang';
import NotFoundPage from './page/notFound';
import LoginPage from './page/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kategori" Component={KategoriPage} />
        <Route path="/:slug" Component={DetailPage} />
        <Route path="/search/:nama" Component={HasilPencarianPage} />
        <Route path="/keranjang" Component={KeranjangPage} />
        <Route path="/pembayaran" Component={PembayaranPage} />
        <Route path="/daftar-transaksi" Component={DaftarTransaksiPage} />
        <Route path="/settings/:option" Component={SettingPage} />
        <Route path="/login" element={<LoginPage />} />
        {/* Route Pegawai */}
        <Route path="/pegawai/home" element={<HomePage role="pegawai" />}  />
        <Route path="/pegawai/kategori" element={<KategoriPage role="pegawai" />}  />
        <Route path="/pegawai/listbarang" element={<ListSemuaBarangComponent role="pegawai" />}  />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
