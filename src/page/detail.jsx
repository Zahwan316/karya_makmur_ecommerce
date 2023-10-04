import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import ImagePreviewComponent from '../component/detail/img';
import DeskripsiComponent from '../component/detail/deskripsi';
import { Box } from '@chakra-ui/react';
import CardFloating from '../component/card/card_floating';
import SpesifikasiProdukComponent from '../component/detail/spesifikasi_produk';
import RatingCommentComponent from '../component/detail/rating_comment';
import LainnyaDetailComponent from '../component/detail/lainnya';

const DetailPage = () => {
    return(
        <DefaultLayout >
           <Box className='flex flex-col mb-10 sm:flex-col sm:gap-4 lg:flex-row xl:flex-row md:flex-row'> 
            <ImagePreviewComponent  />
            <DeskripsiComponent />
            <CardFloating page="detail"/>
           </Box>
           <Box className='mb-10'>
             <SpesifikasiProdukComponent />
           </Box>
           <Box className='mb-10'>
             <RatingCommentComponent />
           </Box>
           <Box>
            <LainnyaDetailComponent />
           </Box>
        </DefaultLayout>
    )
}

export default DetailPage