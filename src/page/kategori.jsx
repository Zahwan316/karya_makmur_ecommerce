import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import KategoriCard from '../component/card/kategori_card';
import ButtonPrimary from '../component/button/buttonprimary';
import { Box, useDisclosure } from '@chakra-ui/react';
import ModalComponent from '../component/modal/modal';
import FormKategoriComponent from '../component/form/formkategori';
import useItemStore from '../state/item';
import axios from "axios"

const KategoriPage = (props) => {
  const {isOpen,onOpen,onClose} = useDisclosure()
  const [datakategori,setdatakategori] = useItemStore((state) => [state.kategori,state.setkategori])

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(Object.keys(datakategori).length === 0){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}kategori`)
          setdatakategori(res.data.data)
        }
      }
      catch(e){
        //console.log(e)
        throw new Error(e.message)
      }
    }
    fetchdata()
  },[])

  useEffect(() => {
    console.log(datakategori)
  })
  

  return(
      <DefaultLayout>
          <Box className='mb-6'>
            <h2 className='font-bold text-lg mb-4'>Kategori</h2>
            {
              props.role === "pegawai" &&
              <ButtonPrimary onclick={onOpen}>+ Tambah Kategori</ButtonPrimary>
            }
          </Box>
          <div className='flex flex-wrap gap-6'>
             {
              datakategori.map((item,index) =>
                <KategoriCard
                  img={`${process.env.REACT_APP_URL_API}img/${item.img}`}
                  nama={item.nama}
                  key={index}
                />
              )
             }
          </div>
          <ModalComponent 
            onopen={onOpen}
            onclose={onClose}
            isopen={isOpen}
            title="Tambah Kategori"
            body={<FormKategoriComponent />}
            size="xl"
          />
      </DefaultLayout>
  )
}

export default KategoriPage