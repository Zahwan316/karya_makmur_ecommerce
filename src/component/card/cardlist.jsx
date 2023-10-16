import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../button/buttonprimary';
import { Box, Button, Text } from '@chakra-ui/react';

const CardListComponent = (props) => {
  return(
    <Box className='mb-4 bg-gray-300 p-4 rounded-lg flex justify-between items-center'>
      <Box className='p-2'>
        <Text noOfLines={1}>{props.nama}</Text>
      </Box>
      <Box className='flex gap-3'>
       <Button colorScheme='red' id={props.id} typebtn="delete" onClick={props.onclick}>Hapus</Button>
       <Button colorScheme='blue' id={props.id} typebtn="edit" onClick={props.onclick}>Edit</Button>
      </Box>
    </Box>
  )
}

export default CardListComponent