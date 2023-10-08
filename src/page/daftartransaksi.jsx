import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import DaftarTransaksiItemComponent from '../component/daftar_transaksi/daftartransaksiitem';

const DaftarTransaksiPage = () => {
  return(
   <DefaultLayout>
    <h2 className='font-bold text-2xl mb-6'>Daftar Transaksi</h2>
    <DaftarTransaksiItemComponent />
   </DefaultLayout>
  )
}

export default DaftarTransaksiPage;