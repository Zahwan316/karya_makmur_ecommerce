import { Box, Input, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardListSelectComponent from '../card/cardlistselect';
import ButtonPrimary from '../button/buttonprimary';
import useItemStore from '../../state/item';
import axios from 'axios';
import useFormStore from '../../state/form';
import ModalComponent from '../modal/modal';
import FormKategoriComponent from './formkategori';

const FormKategoriBarangComponent = (props) => {
  const[datakategori,setdatakategori] = useItemStore((state) => [state.kategori,state.setkategori])
  const[forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const{isOpen,onOpen,onClose} = useDisclosure()
  const [searchtext,setsearchtext] = useState("")

  useEffect(() => {
    const fetchdata = async() => {
      try{
        let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori`)
        setdatakategori(res.data.data)
      }
      catch(e){
        throw new Error(e.message)
      }
    }
    fetchdata()
  },[])

  const setActiveKategori = (e) => {
    const id = e.target.getAttribute("id")
    let kategori = e.target.getAttribute("kategori")
    setforminput("kategori_id",id)
  }

  const handlesearchtext = (e) => {
    setsearchtext(e.target.value)
  }

  const handleSubmitKategori = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("nama",forminput.nama)
    formdata.append("gambar",forminput.gambar)

    props.datasubmit("kategori","post",formdata,onClose())

  }

  return(
    <Box>
      <Box className='mb-6'>
        <Input type="text"  placeholder='Cari Kategori' className='mb-4' onChange={handlesearchtext}/>
        <ButtonPrimary onclick={onOpen}>Tambah Kategori</ButtonPrimary>
      </Box>
      <Box className='snap-y'>
        {
          datakategori.map((item,index) => {
            if(item.nama.toLowerCase().includes(searchtext.toLowerCase())){
              return(
                <CardListSelectComponent 
                  nama={item.nama} 
                  key={index}
                  onclick={setActiveKategori} 
                  id={item.kategori_id}
                  keaktifan="0" />
              )
            }
          }
          )
        }
      </Box>
      <ModalComponent 
        isopen={isOpen}
        onclose={onClose}
        onopen={onOpen}
        title="Tambah Kategori"
        body={<FormKategoriComponent />}
        handlesubmit={handleSubmitKategori}
      />
    </Box>
  )
}

export default FormKategoriBarangComponent