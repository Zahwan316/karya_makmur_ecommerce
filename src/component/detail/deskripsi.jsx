import { Box, Button } from '@chakra-ui/react';
import { cilRestaurant, cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const DeskripsiComponent = () => {
    return(
        <div>
            <Box>
                <h2 className='font-bold text-3xl mb-1'>Sofa Premium Warna Gray</h2>
                <Box className='flex mb-10'>
                    <Box className='mr-10'>
                        <span>Terjual 250 produk</span>
                    </Box>
                    <Box className='flex'>
                        <CIcon icon={cilStar} className='w-6 mr-1'></CIcon>
                        <p>5.0</p>
                    </Box>
                </Box>
                <Box className='mb-4'>
                    <span className='line-through text-lg'>Rp2.599.000</span>
                    <h2 className='font-bold text-2xl'>Rp2.000.000</h2>
                </Box>
                <Box className='mb-4 flex flex-col'>
                    <span className='font-bold mb-2'>Varian : </span>
                    <div className='flex flex-wrap gap-2'>
                        <Button style={{borderColor:"#B0D9B1"}} variant="outline">+ Meja</Button>
                        <Button style={{borderColor:"#B0D9B1"}} variant="outline">+ Meja</Button>
                        <Button style={{borderColor:"#B0D9B1"}} variant="outline">+ Meja</Button>
                    </div>
                </Box>
                <Box className='' width="lg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ad totam cum harum. Quidem nulla aperiam mollitia alias exercitationem non enim assumenda, perspiciatis odit voluptas, ea fugiat blanditiis deserunt! Tempore.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ad totam cum harum. Quidem nulla aperiam mollitia alias exercitationem non enim assumenda, perspiciatis odit voluptas, ea fugiat blanditiis deserunt! Tempore.</p>
                </Box>
            </Box>
        </div>
    )
}

export default DeskripsiComponent