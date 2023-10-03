import { Box, Card, CardBody, Image } from '@chakra-ui/react';
import { cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';


const CardComponent = (props) => {
    return(
      <Box className='w-60' borderRadius="xl" boxShadow="md">
        <Image src={props.src} borderTopRadius="xl"/>
        <Box p="6">
            <Box  className='mb-2'>
                <h2>{props.nama}</h2>
            </Box>
            {
                props.diskon === true &&
                <Box textDecor="line-through" fontSize="13">
                    {props.hargadiskon}
                </Box>
            }
            <Box fontWeight="bold" className='mb-4'>
                {props.harga}
            </Box>
            <Box className='flex'>
                <CIcon icon={cilStar} className='w-5 h-5 mr-1'/>
                <span className='mr-4'>{props.rating}</span>
                <span className='mr-4'>|</span>
                <span>{props.terjual} Terjual</span>
            </Box>
        </Box>
      </Box>
    )
}

export default CardComponent