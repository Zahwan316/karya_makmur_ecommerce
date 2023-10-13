import { Box } from '@chakra-ui/react';
import { cilArrowCircleRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const ModalBodyMetodePembayaranComponent = () => {
  const data_metodepembayaran = [
    {
        title:"Bayar di Toko",
        items:[
            {
                nama:"Bayar Di Toko",
            },
        ]
    },
    {
        title:"Kartu Kredit",
        items:[
            {
                nama:"Kartu Kredit",
            },
        ]
    },
    {
        title:"Bank",
        items:[
            {
                nama:"BCA",
            },
            {
                nama:"BRI",
            },
        ]
    },
  ]

  return(
    <Box>
      {
        data_metodepembayaran.map((item,index) => 
        <>
            <h2 className='font-bold text-lg mb-2'>
                 {item.title} 
            </h2>
            {
                item.items.map((data,index) => 
                    <Box className='bg-gray-200 mb-4 rounded-lg p-4 flex justify-between cursor-pointer'>
                        <p>{data.nama}</p>    
                        <CIcon icon={cilArrowCircleRight} size='sm' className='w-5 h-5' />
                    </Box>
                )
            }
        </>
        )
      }         
    </Box>
  )
}

export default ModalBodyMetodePembayaranComponent