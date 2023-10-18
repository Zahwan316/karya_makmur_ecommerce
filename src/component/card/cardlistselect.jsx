import { Box, Button } from '@chakra-ui/react';
import { cilCheck } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CardListSelectComponent = (props) => {


  return(   
    <Box className={`flex bg-gray-200 p-6 rounded-lg mb-4 border ${props.keaktifan == 1 && "border-green-500"} justify-between items-center`} >
      <Box >
        <h2 className='font-bold text-lg text-gray-500'>{props.nama}</h2>
      </Box>
      <Box className='flex items-center'>
        {
            props.keaktifan == 1 ?
            <CIcon icon={cilCheck   } style={{color:"#79AC78"}} className='w-8 h-8' />
            :
            <Button style={{backgroundColor:"#79AC78",color:"white"}} onClick={props.onclick} id={props.id}>Pilih</Button>

        }
      </Box>
    </Box>
  )
}

export default CardListSelectComponent