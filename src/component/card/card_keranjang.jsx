import { Box, Checkbox, Image, Text } from '@chakra-ui/react';
import { cilMinus, cilPlus, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const CardKeranjangComponent = () => {
    const[count,setcount] = useState(1)

    const handleIncreaseCount = () => {
        setcount(prev => prev + 1)
    }

    const handleDecreaseCount = () => {
        setcount(prev => prev - 1)
    }

    useEffect(() => {
        if(count < 0){
            setcount(0)
        }
    },[count])

    return(
        <Box className='flex border border-gray-200 w-3/4 rounded-lg shadow-md p-6 mb-6 items-center' >
            <div className='mr-4 flex items-center'>
                <Checkbox />
            </div>
            <div className=' mr-4'>
                <Image src="./img/lemari.jpg" className='w-20 rounded-md' />
            </div>
            <div className='mr-8'>
                <Text noOfLines={1}>Lorem ipsum dolor sit amet constectur adipiscing</Text>
                <h2 className='text-gray-400'>+ Meja</h2>
                <h2 className='font-bold text-lg'>Rp2.000.000</h2>
            </div>
            <div className='flex items-center gap-4 mr-12'>
                <div>
                    <CIcon icon={cilMinus} className='w-5 cursor-pointer' onClick={handleDecreaseCount} />
                </div>
                    <span>{count}</span>
                <div>
                    <CIcon icon={cilPlus} className='w-5 cursor-pointer' onClick={handleIncreaseCount}/>
                </div>
            </div>
            <div className=' flex items-center'>
                <CIcon icon={cilTrash} color='red' className='cursor-pointer w-8'/>
            </div>
        </Box>
    )
}

export default CardKeranjangComponent