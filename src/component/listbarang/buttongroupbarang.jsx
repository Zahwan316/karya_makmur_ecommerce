import { Box, Button, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import ModalComponent from '../modal/modal';
import FormTambahBarangComponent from '../form/formtambahbarang';
import useFormStore from '../../state/form';
import Swal from 'sweetalert2';
import axios from 'axios';

const ListButtonGroupComponent = () => {
  const{isOpen,onClose,onOpen} = useDisclosure();
  const[forminput,setforminput] = useFormStore((state) => [state.form,state.setform]);

  const PostPutSubmit = async(url,method,data) => {
    try{
      let res;
      switch(method){
        case "post":
          res = await axios.post(`${process.env.REACT_APP_URL_API}${url}`,data,{
            "headers":{
              "Content-Type":"multipart/form-data"
            }
          })
          break;
      }
      Swal.fire({
        title:`Data Berhasil ${method === 'post' ? "Data berhasil diedit" : "Data Berhasil Diupdate"}`,
        icon:"success"
      })
      onClose()
    }
    catch(e){
      console.log(e)
      throw new Error(e.message)
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    PostPutSubmit(`barang`,"post",forminput)
  }

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
        handlesubmit={handlesubmit}
      />
    </>
  )
}

export default ListButtonGroupComponent;