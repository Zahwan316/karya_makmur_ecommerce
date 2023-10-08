import { Box } from '@chakra-ui/react';
import { cilCreditCard } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import CardMetodePembayaranComponent from './component/cardmetodepembayaran';

const MetodePembayaranComponent = () => {
    return(
        <Box>
            <Box className='flex flex-row mb-4'>
                <CIcon icon={cilCreditCard} className='w-8 h-8 mr-2' />
                <h2 className='font-bold text-lg'>Pembayaran</h2>
            </Box>
            <Box>
                <CardMetodePembayaranComponent />
            </Box>
        </Box>
    )
}

export default MetodePembayaranComponent