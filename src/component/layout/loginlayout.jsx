import { Box, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const LoginLayoutComponent = (props) => {
  return(
    <main className='w-full h-full'>
        <Box className='relative w-full h-full' backgroundImage="url('./img/bglogin.jpg')" style={{backgroundImage:`url(${props.img})`,backgroundSize:"cover"}}>
            <Image src={props.img} boxSize={"100%"} objectFit={"cover"} />
            <Box className='absolute w-2/4 h-full bg-gray-50 z-10 top-0 right-0 p-6 flex justify-center items-center' >
                {props.children}
            </Box>
        </Box>
    </main>
  )
}

export default LoginLayoutComponent