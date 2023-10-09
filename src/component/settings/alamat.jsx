import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardAlamatComponent from './component/cardalamat';
import ModalComponent from '../modal/modal';
import FormTambahAlamatComponent from '../form/formtambahalamat';

const AlamatSettingsComponent = () => {
  const{onClose,isOpen,onOpen} = useDisclosure()
  const[typeform,settypeform] = useState()
  const[editedid,seteditedid] = useState()

  const getTypeBtn = (typebtn,id) => {
    settypeform(typebtn)
    seteditedid(editedid)
  }

  return(
    <Box className='w-3/4 '>
      <Box className='flex justify-between mb-6 items-center'>
        <h2 className='font-bold text-xl '>Alamat</h2>
        <Button style={{backgroundColor:"#79AC78",color:"white"}} onClick={onOpen}>+ Tambah Alamat Baru</Button>
      </Box>
      <Box>
        <CardAlamatComponent
         keaktifan='1'
         getTypeBtn={getTypeBtn} 
        />
        <CardAlamatComponent />
        <CardAlamatComponent />
      </Box>
      <ModalComponent 
        isopen={isOpen}
        onclose={onClose}
        onopen={onOpen}
        title={typeform === "edit" ? "Edit Data" : "Tambah Data"}
        body={<FormTambahAlamatComponent type="tambah" />}
        size="xl"
      />
    </Box>
  )
}

export default AlamatSettingsComponent