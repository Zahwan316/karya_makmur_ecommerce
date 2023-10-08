import { Avatar, Box, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const CardAkunComponent = (props) => {
  const menus = [
    "Biodata",
    "Alamat",
  ]

  return(
    <Box className='relative border border-gray-300 w-64 flex flex-col items-center px-4 py-8 rounded-lg'>
      <Box className='flex flex-col justify-center items-center mb-8'>
        <Avatar size="lg" className='mb-2' />
        <h2>Lorem Ipsum Dolor</h2>
      </Box>
      <Box className='flex flex-right w-full flex-col mb-8'>
        <h2 className='font-bold text-xl mb-2'>Menu</h2>
        <Box>
           {
            menus.map(item => 
             <p className='hover:text-green-500 cursor-pointer text-md ml-2 mb-2' >{item}</p>    
            )
           }
        </Box>
      </Box>
      <Box className='bottom-0 relative'>
        <Button style={{backgroundColor:"#79AC78",color:"white"}}>
            Logout
        </Button>
      </Box>
    </Box>
  )
}

export default CardAkunComponent