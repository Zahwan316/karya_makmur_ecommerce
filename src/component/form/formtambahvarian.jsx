import { Box, FormLabel, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import useItemStore from '../../state/item';
import useFormStore from '../../state/form';

const FormTambahVarianComponent = () => {
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])

  const handleforminput = (e) => {
    setforminput(e.target.name,e.target.value);
  }

  return(
    <Box>
      <div>
        <FormLabel>Nama</FormLabel>
        <Input type="text" name="nama" onChange={handleforminput} value={forminput.nama} />
      </div>
    </Box>
  )
}

export default FormTambahVarianComponent