import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import DetailPembayaranComponent from '../component/pembayaran/detail_pembayaran/detail_pembayaran';
import { Box, Button } from '@chakra-ui/react';
import CIcon from '@coreui/icons-react';
import { cilCheck } from '@coreui/icons';
import CardFloating from '../component/card/card_floating';

const PembayaranPage = () => {
    return(
        <>
            <DefaultLayout>
                <h2 className='font-bold text-2xl mb-6'>Beli Langsung</h2>
                <Box className="mb-10 flex gap-24">
                    <DetailPembayaranComponent />
                    <CardFloating page="pembayaran" height="64" />
                </Box>
                <Button className='w-48 ' style={{backgroundColor:"#79AC78",color:"white"}}>
                    <CIcon icon={cilCheck} className='w-5 h-5 mr-1'/>
                    Bayar
                </Button>
            </DefaultLayout>
        </>
    )
}

export default PembayaranPage