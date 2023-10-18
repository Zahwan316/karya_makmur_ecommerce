import { Box, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardListSelectComponent from '../card/cardlistselect';
import ButtonPrimary from '../button/buttonprimary';
import useItemStore from '../../state/item';
import axios from 'axios';
import useFormStore from '../../state/form';

const FormKategoriBarangComponent = () => {
  const[datakategori,setdatakategori] = useItemStore((state) => [state.kategori,state.setkategori])
  const[forminput,setforminput] = useFormStore((state) => [state.form,state.setform])

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
    setforminput("kategori_id",id)

}

  return(
    <Box>
      <Box className='mb-6'>
        <Input type="text"  placeholder='Cari Kategori' className='mb-4'/>
        <ButtonPrimary>Tambah Alamat</ButtonPrimary>
      </Box>
      <Box>
        {
          datakategori.map((item,index) => 
            <CardListSelectComponent nama={item.nama} key={index} onclick={setActiveKategori} id={item.kategori_id} />
          )
        }
      </Box>
    </Box>
  )
}

export default FormKategoriBarangComponent