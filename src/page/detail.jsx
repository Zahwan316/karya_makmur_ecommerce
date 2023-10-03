import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import ImagePreviewComponent from '../component/detail/img';
import DeskripsiComponent from '../component/detail/deskripsi';
import { Box } from '@chakra-ui/react';

const DetailPage = () => {
    return(
        <DefaultLayout >
           <Box className='flex'> 
            <ImagePreviewComponent  />
            <DeskripsiComponent />
           </Box>
        </DefaultLayout>
    )
}

export default DetailPage