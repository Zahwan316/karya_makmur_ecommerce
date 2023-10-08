import { Box } from '@chakra-ui/react';
import { cilNotes } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import UnitComponent from './component/unit_component';

const PembayaranUnitComponent = () => {
    return(
        <Box className='mb-8'>
            <Box className='flex flex-row items-center mb-4'>
                <CIcon icon={cilNotes} className='w-8 h-8 mr-2' />
                <h2 className='font-bold text-lg'>Barang Yang Dibeli</h2>
            </Box>
            <Box>
                <UnitComponent />
            </Box>
        </Box>
    )
}

export default PembayaranUnitComponent