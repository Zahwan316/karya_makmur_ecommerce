import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import { Box } from '@chakra-ui/react';
import FilterBoxComponent from '../component/searchpage/filter';
import ItemSearchPageComponent from '../component/searchpage/item';

const HasilPencarianPage = () => {
    return(
        <>
            <DefaultLayout >
                <h2 className='font-bold text-xl mb-6'>Hasil Pencarian Kamu</h2>
                <Box className='flex flex-row gap-8'>
                    <FilterBoxComponent />
                    <ItemSearchPageComponent />
                </Box>
            </DefaultLayout>
        </>
    )
}

export default HasilPencarianPage;