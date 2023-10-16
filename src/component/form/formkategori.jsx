import { Box, Button, FormLabel, Image, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import useFormStore from '../../state/form';

const FormKategoriComponent = () => {
  const[uploadedfile,setuploadedfile] = useState()
  const[forminput,setforminput] = useFormStore((state) => [state.form,state.setform])

  const handleuploadfile = (e) => {
    const files = e.target.files[0]
    if(files){
      setuploadedfile(URL.createObjectURL(files))
      setforminput("gambar",files)
    }
  }

  const handleFormInput = (e) => {
    const{name,value} = e.target
    setforminput(name,value)
  }

  useEffect(() => {
    console.log(forminput)
  })

  return(
    <Box>
      <div className="mb-4">
        <FormLabel>Nama</FormLabel>
        <Input type="text" name="nama" onChange={handleFormInput} required value={forminput.nama} />
      </div>
      <div className="mb-4">
        <FormLabel>Gambar</FormLabel>
        {
            uploadedfile && 
            <Box>
              <Image src={uploadedfile} className='mb-3 w-full h-64 rounded-lg' />
            </Box>

        }
        <Input type="file" id="gambar" display={"none"} onChange={handleuploadfile} accept='image/jpg,image/jpeg,image/png'  />
        <FormLabel htmlFor='gambar'>
            <Button colorScheme='green' as={"span"}>Upload Gambar</Button>
        </FormLabel>
      </div>
    </Box>
  )
}

export default FormKategoriComponent