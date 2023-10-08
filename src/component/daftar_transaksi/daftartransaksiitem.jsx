import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardTransaksiComponent from './component/card_transaksi';
import CIcon from '@coreui/icons-react';
import { cilMagnifyingGlass } from '@coreui/icons';

const DaftarTransaksiItemComponent = () => {
  return(
    <div>
     <InputGroup className='mb-5'>
      <InputLeftElement>
        <CIcon icon={cilMagnifyingGlass} className='w-5 h-5' />
      </InputLeftElement>
      <Input type="text" placeholder='Cari Transaksi Anda'/>
     </InputGroup>
     <Box>
        <CardTransaksiComponent 
          status_id="1"
        />
        <CardTransaksiComponent 
          status_id="2"
        />
        <CardTransaksiComponent 
          status_id="3"
        />
        
     </Box>
    </div>
  )
}

export default DaftarTransaksiItemComponent