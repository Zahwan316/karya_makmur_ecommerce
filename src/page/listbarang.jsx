import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import ListButtonGroupComponent from '../component/listbarang/buttongroupbarang';
import BarangMainComponent from '../component/listbarang/barangmain';

const ListSemuaBarangComponent = () => {
  return(
    <DefaultLayout>
      <h2 className='font-bold text-xl mb-6'>List Semua Barang</h2>
      <ListButtonGroupComponent />
      <BarangMainComponent />
    </DefaultLayout>
  )
}

export default ListSemuaBarangComponent;