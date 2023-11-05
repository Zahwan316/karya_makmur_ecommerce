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

  const handleChangeAlamat = () => {
    props.changealamat(props.id)
  }

  const handleOpenModal = () => {
    props.getIdBtn(props.id)
    onOpen()
  }

  return(
    <>
    <Box className={`flex bg-gray-200 p-6 rounded-lg mb-4 border ${props.keaktifan == 1 && "border-green-500"}`}>
      <Box className='w-5/6'>
        <h2 className='font-bold text-lg text-gray-500'>{props.label}</h2>
        <h2 className='font-bold text-lg'>{props.nama}</h2>
        <Text noOfLines={1} className='mb-2'>{props.alamat}</Text>
        <p className='cursor-pointer' onClick={handleOpenModal} style={{color:"#79AC78"}}>Edit Alamat</p>
      </Box>
      <Box className='flex items-center justify-end'>
        {
            props.keaktifan == 1 ?
            <CIcon icon={cilCheck} style={{color:"#79AC78"}} className='w-8 h-8' />
            :
            <Button style={{backgroundColor:"#79AC78",color:"white"}} onClick={handleChangeAlamat}>Pilih</Button>

        }
      </Box>
      <ModalComponent 
        isopen={isOpen}
        onclose={onClose}
        onopen={onOpen}
        title="Edit Data"
        handlesubmit={props.handlesubmit}
        body={<FormTambahAlamatComponent type="edit" id={props.id} />}
      />
    </Box>
    </>
  )
}

export default CardAlamatComponent