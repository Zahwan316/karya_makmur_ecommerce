import { Checkbox, FormLabel, Input, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const FormTambahAlamatComponent = (props) => {
  return(
    <>
      <div className='mb-3'>
        <FormLabel>Nama Penerima</FormLabel>
        <Input type="text" />
      </div>
      <div className='mb-3'>
        <FormLabel>Label</FormLabel>
        <Input type="text" />
      </div>
      <div className='mb-3'>
        <FormLabel>Nomor Telepon</FormLabel>
        <Input type="number" />
      </div>
      <div className='mb-3'>
        <FormLabel>Alamat Lengkap</FormLabel>
        <Textarea resize="none"/>
      </div>
      {
        props.type == "tambah" &&
        <div className='mb-3'>
        <Checkbox>Jadikan Alamat Utama?</Checkbox>
        </div>
      }
    </>
  )
}

export default FormTambahAlamatComponent