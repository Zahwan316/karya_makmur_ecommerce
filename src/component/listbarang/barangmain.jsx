import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';
import { Box } from '@chakra-ui/react';

const BarangMainComponent = () => {
  return(
    <Box className='flex flex-wrap gap-6'>
        <CardComponent 
          nama="Kursi Ruang Tamu"
          src="../img/bangku_ruangtamu.jpg"
          harga="Rp900.000"
        />
        <CardComponent 
          nama="Kursi Ruang Tamu"
          src="../img/bangku_ruangtamu.jpg"
          harga="Rp900.000"
        />
        <CardComponent 
          nama="Kursi Ruang Tamu"
          src="../img/bangku_ruangtamu.jpg"
          harga="Rp900.000"
        />
        <CardComponent 
          nama="Kursi Ruang Tamu"
          src="../img/bangku_ruangtamu.jpg"
          harga="Rp900.000"
        />
        <CardComponent 
          nama="Kursi Ruang Tamu"
          src="../img/bangku_ruangtamu.jpg"
          harga="Rp900.000"
        />
    </Box>
  )
}

export default BarangMainComponent;