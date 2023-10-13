import { Box, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardAlamatComponent from '../../settings/component/cardalamat';

const AlamatPengirimanComponent = () => {
  return(
    <>
     <Box className='mb-6'>
       <Input type="text" placeholder="Cari Alamat" />
     </Box>
     <Box>
        <CardAlamatComponent keaktifan='1' />
        <CardAlamatComponent keaktifan='0' />
     </Box>
    </>
  )
}

export default AlamatPengirimanComponent;