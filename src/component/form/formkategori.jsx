import { Box, Button, FormLabel, Image, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const FormKategoriComponent = () => {
  const[uploadedfile,setuploadedfile] = useState()

  const handleuploadfile = (e) => {
    const files = e.target.files[0]
    if(files){
      setuploadedfile(URL.createObjectURL(files))
    }
  }

  return(
    <Box>
      <div className="mb-4">
        <FormLabel>Nama</FormLabel>
        <Input type="text" />
      </div>
      <div className="mb-4">
        <FormLabel>Gambar</FormLabel>
        {
            uploadedfile && 
            <Box>
              <Image src={uploadedfile} className='mb-3 w-full h-64 rounded-lg' />
            </Box>

        }
        <Input type="file" id="gambar" display={"none"} onChange={handleuploadfile}  />
        <FormLabel htmlFor='gambar'>
            <Button colorScheme='green' as={"span"}>Upload Gambar</Button>
        </FormLabel>
      </div>
    </Box>
  )
}

export default FormKategoriComponent