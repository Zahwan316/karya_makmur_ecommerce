import { Box, Image } from '@chakra-ui/react';
import { cilMinus, cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const UnitComponent = () => {
    return(
        <Box className='flex'>
            <Box className='mr-4'>
                <Image src='./img/sofa.jpg' className='w-36 h-36 rounded-lg'/>
            </Box>
            <Box>
                <p className='text-xl '>Sofa Premium Warna Gray</p>
                <p className='text-gray-500 mb-2'>4,2kg / varian</p>
                <h2 className='font-bold text-lg mb-4'>Rp4.000.000</h2>
                <Box className='flex flex-row items-center'>
                    <p className='mr-3'>Jumlah : </p>
                    <Box className='flex items-center'>
                        <CIcon icon={cilMinus} className='w-5 h-5 cursor-pointer'/>
                        <p className='mx-2'>10</p>
                        <CIcon icon={cilPlus} className='w-5 h-5 cursor-pointer'/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UnitComponent