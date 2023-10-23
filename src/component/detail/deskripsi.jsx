import { Box, Button } from '@chakra-ui/react';
import { cilRestaurant, cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState, useEffect } from 'react';

const DeskripsiComponent = (props) => {
    const formatter = new Intl.NumberFormat("id-ID",{
        style:"decimal",
        useGrouping:true
    })

    const formattednumber = formatter.format(props.harga)

    return(
        <div>
            <Box>
                <h2 className='font-bold text-3xl mb-1'>{props.namaproduk}</h2>
                <Box className='flex mb-10'>
                    <Box className='mr-10'>
                        <span>Terjual {props.terjual} produk</span>
                    </Box>
                    <Box className='flex'>
                        <CIcon icon={cilStar} className='w-6 mr-1'></CIcon>
                        <p>{props.rating}</p>
                    </Box>
                </Box>
                <Box className='mb-4'>
                    {
                        props.diskon === true &&
                        <span className='line-through text-lg'>Rp2.599.000</span>
                    }
                    <h2 className='font-bold text-2xl'>Rp{formattednumber}</h2>
                </Box>
                {/* <Box className='mb-4 flex flex-col'>
                    <span className='font-bold mb-2'>Varian : </span>
                    <div className='flex flex-wrap gap-2'>
                        {
                            props.varian ?
                            props.varian.map(item => 
                                <Button style={{borderColor:"#B0D9B1"}} variant="outline">+ Meja</Button>
                            )
                            :
                            ""
                        }
                        
                    </div>
                </Box> */}
                <Box className='' width="lg">
                    <p>{props.deskripsi}</p>
                   
                </Box>
            </Box>
        </div>
    )
}

export default DeskripsiComponent