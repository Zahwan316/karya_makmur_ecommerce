import { Box, Button, FormLabel, Input, Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const BiodataSettingComponent = () => {
  return(
    <Box className='w-3/4'>
      <h2 className='font-bold text-xl mb-6 '>Biodata Diri</h2>
      <Box className='mb-6'>
        <Box className='mb-4' >
          <FormLabel>Nama</FormLabel>
          <Input type="text" className='' />
        </Box>
        <Box className='flex gap-2 mb-4'>
         <Box className='w-1/2' >
           <FormLabel>Jenis Kelamin</FormLabel>
           <Select>
            <option>Pilih</option>
            <option value="P">Laki Laki</option>
            <option value="L">Perempuan</option>
           </Select>
         </Box>
         <Box className='w-1/2'>
           <FormLabel>No Telepon</FormLabel>
           <Input type="number"  className='' />
         </Box>
        </Box>
        <Box className='flex gap-2'>
         <Box className='w-1/2' >
           <FormLabel>Email</FormLabel>
           <Input type="email" className='' />
         </Box>
         <Box className='w-1/2'>
           <FormLabel>Tanggal Lahir</FormLabel>
           <Input type="date" className='' />
         </Box>
        </Box>
      </Box>
      <Button style={{backgroundColor:"#79AC78",color:"white"}}>Simpan</Button>
    </Box>
  )
}

export default BiodataSettingComponent