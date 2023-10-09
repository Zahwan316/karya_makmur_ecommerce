import { Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import { cilCheck } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import ModalComponent from '../../modal/modal';
import FormTambahAlamatComponent from '../../form/formtambahalamat';

const CardAlamatComponent = (props) => {
  const{onClose,isOpen,onOpen} = useDisclosure()

  const handleClick = (e) => {
    let id = e.target.getAttribute("id")
    let type = e.target.getAttribute("type")
    props.getTypeBtn(type,id)
  }

  return(
    <>
    <Box className={`flex bg-gray-200 p-6 rounded-lg mb-4 border ${props.keaktifan == 1 && "border-green-500"}`}>
      <Box >
        <h2 className='font-bold text-lg text-gray-500'>Rumah</h2>
        <h2 className='font-bold text-lg'>Nama Pembeli</h2>
        <Text noOfLines={1} className='mb-2'>JL Lorem Ipsum Dolor Sit Amet Constectur adipiscing elit ila magnum lorem ipsum dolor sit amet constectur adipisicing elit lorem</Text>
        <p className='cursor-pointer' onClick={onOpen} style={{color:"#79AC78"}}>Edit Alamat</p>
      </Box>
      <Box className='flex items-center'>
        {
            props.keaktifan == 1 ?
            <CIcon icon={cilCheck} style={{color:"#79AC78"}} className='w-8 h-8' />
            :
            <Button style={{backgroundColor:"#79AC78",color:"white"}}>Pilih</Button>

        }
      </Box>
      <ModalComponent 
        isopen={isOpen}
        onclose={onClose}
        onopen={onOpen}
        title="Edit Data"
        body={<FormTambahAlamatComponent type="edit" />}
      />
    </Box>
    </>
  )
}

export default CardAlamatComponent