import { Box, Button, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import ModalComponent from '../modal/modal';
import FormTambahBarangComponent from '../form/formtambahbarang';

const ListButtonGroupComponent = () => {
  const{isOpen,onClose,onOpen} = useDisclosure();
  const[forminput,setforminput] = useState();

  return(
    <>
      <Box className='mb-5 flex justify-between'>
        <Box>
         <ButtonPrimary onclick={onOpen}>+ Tambah Barang</ButtonPrimary>
        </Box>
        <Box>
          <Input type="text" placeholder="Cari Barang" />
        </Box>
      </Box>
      <ModalComponent
        isopen={isOpen}
        onopen={onOpen}
        onclose={onClose}
        size="3xl"
        title="Tambah Barang"
        body={<FormTambahBarangComponent />}
      />
    </>
  )
}

export default ListButtonGroupComponent;