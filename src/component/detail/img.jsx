import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {Swiper,SwiperSlide} from "swiper/react"

const ImagePreviewComponent = () => {
    return(
        <div className='w-64 mr-12'>
            <img src='./img/sofa.jpg' className='w-64 rounded-md mb-4' />
            <div className='flex flex-wrap gap-3'>
                <Box>
                    <img src='./img/sofa.jpg' className='w-16 rounded-md'/>
                </Box>
                <Box>
                    <img src='./img/sofa.jpg' className='w-16 rounded-md'/>
                </Box>
                <Box>
                    <img src='./img/sofa.jpg' className='w-16 rounded-md'/>
                </Box>
                <Box>
                    <img src='./img/sofa.jpg' className='w-16 rounded-md'/>
                </Box>
                <Box>
                    <img src='./img/sofa.jpg' className='w-16 rounded-md'/>
                </Box>
            </div>
        </div>
    )
}

export default ImagePreviewComponent;