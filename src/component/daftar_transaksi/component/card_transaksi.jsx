import { Box, Button, Image } from '@chakra-ui/react';
import { cilClock } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CardTransaksiComponent = (props) => {
  return(
    <Box className='border border-gray-300 shadow-md p-4 rounded-lg mb-4'>
     <Box className='flex flex-row items-center mb-4'>
      <CIcon icon={cilClock} className='h-5 w-5 mr-2'/>
      <h2 className='mr-4 font-bold' >5 Oktober 2023</h2>
      <Box className='mr-4 p-1 rounded-lg text-white flex justify-center w-auto' style={{backgroundColor:`${props.status_id == 1 || props.status_id == 2 ? '#EE9322': "#79AC78"}`}}>
        <p>
          {
            props.status_id == 1 ?
            "Menunggu Konfirmasi"
            :
            (
              props.status_id == 2 ?
              "Dalam Perjalanan"
              :
              "Selesai"
            )
          }
        </p>
      </Box>
      <p className='text-gray-400'>KM/BJR/23923832</p>
     </Box>
     <Box className='flex flex-row justify-between'>
      <Box className='flex flex-row'>
       <Box className='mr-4'> 
         <Image src="./img/sofa.jpg" className='w-24 h-24 rounded-lg' />
       </Box>
       <Box>
         <h2 className='font-bold text-lg'>Sofa Premium Warna Gray</h2>
         <p className='text-gray-400'>1 barang x 2.000.000</p>
       </Box>
      </Box>
      <Box className='mr-8'>
        <p>Total Belanja</p>
        <h2 className='font-bold text-lg'>2.000.000</h2>
      </Box>
     </Box>
     <Box className='flex justify-end'>
      <Box className='flex items-center '>
        <p className='cursor-pointer mr-4' style={{color:"#79AC78"}}>Lihat Detail Transaksi</p>
        {
          props.status_id == 3 &&
          <Button className='mr-8' style={{backgroundColor:"#79AC78",color:"white"}}>Beli Lagi</Button>

        }
      </Box>
     </Box>
    </Box>
  )
}

export default CardTransaksiComponent;