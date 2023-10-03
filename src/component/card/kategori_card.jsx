import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const KategoriCard = () => {
    return(
        <Box className='w-64 h-64 rounded-2xl flex justify-center items-center cursor-pointer'>
            <img src="./img/lemari.jpg" className='w-full h-full rounded-2xl hover:bg-sky-800' style={{filter:"brightness(0.6)"}} />
            <p className='absolute font-bold text-white '>Lemari</p>
        </Box>
    )
}

export default KategoriCard