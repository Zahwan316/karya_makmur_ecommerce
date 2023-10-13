import { Box, Image, useDisclosure } from '@chakra-ui/react';
import { cilArrowCircleRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';
import ModalComponent from '../../../modal/modal';
import ModalBodyMetodePembayaranComponent from './modalmetodepembayaran';

const CardMetodePembayaranComponent = () => {
    const{isOpen,onOpen,onClose} = useDisclosure();

    return(
        <Box className="bg-gray-300 rounded-lg p-6 flex items-center shadow-lg cursor-pointer" onClick={onOpen}>
            <Box className='mr-4 '>
                <Image src="./img/bca.png" className='w-12 h-10' />
            </Box>
            <Box className='w-4/5'>
                <h2 className='font-bold'>BCA</h2>
            </Box>
            <Box className='right-0 relative'>
                <CIcon icon={cilArrowCircleRight} className='w-5 h-5' />
            </Box>
            <ModalComponent 
                isopen={isOpen}
                onclose={onClose}
                onopen={onOpen}
                title="Metode Pembayaran"
                size="2xl"
                body={<ModalBodyMetodePembayaranComponent />}
            />
        </Box>
    )
}

export default CardMetodePembayaranComponent