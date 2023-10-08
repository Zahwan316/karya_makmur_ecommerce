import { Box, Text } from '@chakra-ui/react';
import { cilArrowCircleRight, cilLocationPin } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CardPembayaranComponent = () => {
    return(
        <Box className='bg-gray-300 flex flex-row p-6  rounded-xl shadow-lg cursor-pointer mb-8'>
            <Box className='mr-4'>
                <CIcon icon={cilLocationPin} className="w-10 h-10" />
            </Box>
            <Box className='w-4/5'>
                <Box>
                    <h2 className='font-bold text-xl mb-2'>Alamat Pengiriman</h2>
                </Box>
                <Box>
                    <Text noOfLines={1}>JL Lorem Ipsum dolor sit amet constectur adipiscing elit.ila magnum adipcius</Text>
                </Box>
            </Box>
            <Box className='flex items-center right-0 relative'>
                <CIcon icon={cilArrowCircleRight} className='h-5 w-5'/>
            </Box>
        </Box>
    )
}

export default CardPembayaranComponent;