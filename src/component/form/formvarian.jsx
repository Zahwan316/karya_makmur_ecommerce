import { Box, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import CardListComponent from '../card/cardlist';
import ModalComponent from '../modal/modal';
import FormTambahVarianComponent from './formtambahvarian';

const FormVarianBarangComponent = () => {
  const{isOpen,onOpen,onClose} = useDisclosure();

  return(
    <Box>
        <div className='mb-3'>
          <Input type="text" placeholder='Cari Varian' />
        </div>
        <div className='mb-3'>
         <ButtonPrimary onclick={onOpen}>Tambah Varian</ButtonPrimary>
         <ModalComponent 
           onclose={onClose}
           isopen={isOpen}
           onopen={onOpen}
           title="Tambah Varian"
           body={<FormTambahVarianComponent />}
         />
        </div>
        <div>
            <CardListComponent />
            <CardListComponent />
        </div>
    </Box>
  )
}

export default FormVarianBarangComponent