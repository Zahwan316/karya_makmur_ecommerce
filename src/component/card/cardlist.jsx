import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import { Box, Button, Text } from '@chakra-ui/react';

const CardListComponent = (props) => {
  return(
    <Box className='mb-4 bg-gray-300 p-4 rounded-lg flex justify-between items-center'>
      <Box className='p-2'>
        <Text noOfLines={1}>lorem ipsum dolor sit amet constectur adipiscing elit ila magnum</Text>
      </Box>
      <Box className='flex gap-3'>
       <Button colorScheme='red' onClick={props.onclick}>Hapus</Button>
       <Button colorScheme='blue' onClick={props.onclick}>Edit</Button>
      </Box>
    </Box>
  )
}

export default CardListComponent