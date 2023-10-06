import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import { Box } from '@chakra-ui/react';
import CardKeranjangComponent from '../component/card/card_keranjang';
import CardFloating from '../component/card/card_floating';
import CardComponent from '../component/card/card';

const KeranjangPage = () => {
    return(
        <DefaultLayout>
            <h2 className='font-bold text-2xl mb-6'>Keranjang</h2>
            <Box className='flex flex-row mb-8'>
                <Box>
                    <CardKeranjangComponent />
                    <CardKeranjangComponent />
                    <CardKeranjangComponent />
                    <CardKeranjangComponent />

                </Box>
                <Box>
                    <CardFloating page="keranjang"/>
                </Box>
            </Box>
            <Box>
                <h2 className='font-bold text-xl mb-5'>Rekomendasi Untukmu</h2>
                <Box className='flex flex-row gap-6'>
                    <CardComponent
                        src="./img/bangku_ruangtamu.jpg"
                        nama="Bangku ruang tamu ipsum dolor sit amet constur adipiscing elit"
                        harga="Rp2.000.000"
                    />
                    <CardComponent
                        src="./img/bangku_ruangtamu.jpg"
                        nama="Bangku ruang tamu ipsum dolor sit amet constur adipiscing elit"
                        harga="Rp2.000.000"
                    />
                    <CardComponent
                        src="./img/bangku_ruangtamu.jpg"
                        nama="Bangku ruang tamu ipsum dolor sit amet constur adipiscing elit"
                        harga="Rp2.000.000"
                    />
                    <CardComponent
                        src="./img/bangku_ruangtamu.jpg"
                        nama="Bangku ruang tamu ipsum dolor sit amet constur adipiscing elit"
                        harga="Rp2.000.000"
                    />
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default KeranjangPage;