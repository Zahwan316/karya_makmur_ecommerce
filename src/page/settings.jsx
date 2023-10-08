import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import CardAkunComponent from '../component/settings/cardakun';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import BiodataSettingComponent from '../component/settings/biodata';

const SettingPage = (props) => {
  const {option} = useParams()

  return(
    <DefaultLayout>
      <h2 className='font-bold mb-3 text-xl' >Pengaturan</h2>
      <Box className='flex flex-row gap-8'>
        <CardAkunComponent />
        {
            option === "biodata" &&
            <BiodataSettingComponent />
        }
      </Box>
    </DefaultLayout>
  )
}

export default SettingPage;