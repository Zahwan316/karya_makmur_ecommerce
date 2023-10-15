import { Box, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardListSelectComponent from '../card/cardlistselect';
import ButtonPrimary from '../button/buttonprimary';

const FormKategoriBarangComponent = () => {
  return(
    <Box>
      <Box className='mb-6'>
        <Input type="text"  placeholder='Cari Kategori' className='mb-4'/>
        <ButtonPrimary>Tambah Alamat</ButtonPrimary>
      </Box>
      <Box>
        <CardListSelectComponent />
      </Box>
    </Box>
  )
}

export default FormKategoriBarangComponent