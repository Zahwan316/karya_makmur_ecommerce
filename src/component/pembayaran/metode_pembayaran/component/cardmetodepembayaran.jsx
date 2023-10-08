import { Box, Image } from '@chakra-ui/react';
import { cilArrowCircleRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CardMetodePembayaranComponent = () => {
    return(
        <Box className="bg-gray-300 rounded-lg p-6 flex items-center shadow-lg cursor-pointer">
            <Box className='mr-4 '>
                <Image src="./img/bca.png" className='w-12 h-10' />
            </Box>
            <Box className='w-4/5'>
                <h2 className='font-bold'>BCA</h2>
            </Box>
            <Box className='right-0 relative'>
                <CIcon icon={cilArrowCircleRight} className='w-5 h-5' />
            </Box>
        </Box>
    )
}

export default CardMetodePembayaranComponent