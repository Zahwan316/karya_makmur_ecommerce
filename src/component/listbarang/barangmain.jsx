import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';
import { Box, Skeleton } from '@chakra-ui/react';
import useItemStore from '../../state/item';
import axios from 'axios';
import useFormStore from '../../state/form';
import Swal from 'sweetalert2';

const BarangMainComponent = () => {
  const [databarang,setdatabarang] = useItemStore((state) => [state.barang,state.setbarang])
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])

  useEffect(() => {
    const fetchdata = async() => {
      try{
        if(Object.keys(databarang).length === 0){
          let res = await axios.get(`${process.env.REACT_APP_URL_API}barang`)
          setdatabarang(res.data.data)
        }
      }
      catch(e){
        throw new Error(e.message)
      }
    }
    fetchdata()
  },[])

  useEffect(() => {
    console.log(typeof databarang)
  })

  return(
    <Box className='flex flex-wrap gap-6'>
      {
        databarang == [] ?
          <Skeleton height={"90px"}>

          </Skeleton>
       :
        databarang.map((item,index) => 
          <CardComponent 
            nama={item.nama}
            src={`${process.env.REACT_APP_URL_API}img/${item.gambar}`}
            harga={`Rp${item.harga_asli}`}
            terjual={item.terjual}
            key={index}
            rating={item.rating}
            slug={item.slug}
            
          />
          
        )
      }
        
       
    </Box>
  )
}

export default BarangMainComponent;