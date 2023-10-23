import { Box, Button, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import ModalComponent from '../modal/modal';
import FormTambahBarangComponent from '../form/formtambahbarang';
import useFormStore from '../../state/form';
import Swal from 'sweetalert2';
import axios from 'axios';

const ListButtonGroupComponent = () => {
  const {isOpen,onClose,onOpen} = useDisclosure();
  const [forminput,setforminput,resetform,setsearchtext] = useFormStore((state) => [state.form,state.setform,state.resetform,state.setsearchtext])
  const [typeform,settypeform] = useState()
  

  useEffect(() => {
    console.log(forminput)
  })

  const dataSubmit = async(url,method,data,onclose) => {
    try{
      let res
      switch(method){
        case "post":
          res = await axios.post(`${process.env.REACT_APP_URL_API}${url}`,data)
          console.log(res)
          break;
        case "put":
          
          break;
      }
      Swal.fire({
        title:`Data Berhasil ${method == 'post' ? "Ditambah" : "Diupdate"}`,
        icon:"success"
      })
      resetform()
      onclose()
    }
    catch(e){
      console.log(e)
    }
  }

  const openModal = (e) => {
    onOpen()
    const typebtn = e.target.getAttribute("typebtn")
    settypeform(typebtn)
  }

  
 
  const handlesubmit = (e) => {
    e.preventDefault()
    //handleSlug()
    console.log(forminput.slug)
    let formdata = new FormData()
    for(const key in forminput){
      formdata.append(key, forminput[key])
    }
    for(const data of formdata.entries()) {
      const[name,value] = data
      console.log(`kolom ${name} value : ${value}`)
    }
  
    if(typeform === "tambah"){
      console.log(formdata)
      dataSubmit("barang","post",formdata,onClose())
    }
  }

  const onclose = () => {
    onClose()
    resetform()
  }

  const handleSearchText = (e) => {
    setsearchtext(e.target.value)
  }

  return(
    <>
      <Box className='mb-5 flex justify-between'>
        <Box>
         <ButtonPrimary onclick={openModal} typebtn="tambah">+ Tambah Barang</ButtonPrimary>
        </Box>
        <Box>
          <Input type="text" placeholder="Cari Barang" onChange={handleSearchText} />
        </Box>
      </Box>
      <ModalComponent
        isopen={isOpen}
        onopen={onOpen}
        onclose={onclose}
        size="3xl"
        title="Tambah Barang"
        body={<FormTambahBarangComponent datasubmit={dataSubmit} />}
        handlesubmit={handlesubmit}
        
      />
    </>
  )
}

export default ListButtonGroupComponent;