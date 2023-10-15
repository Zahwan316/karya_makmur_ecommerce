import { Box, FormLabel, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const FormTambahVarianComponent = () => {
  return(
    <Box>
      <div>
        <FormLabel>Nama</FormLabel>
        <Input type="text" />
      </div>
    </Box>
  )
}

export default FormTambahVarianComponent