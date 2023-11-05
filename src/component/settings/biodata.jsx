import { Box, Button, FormLabel, Input, Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import useFormStore from '../../state/form';
import useAkunStore from '../../state/akun';
import axios from 'axios';
import Swal from 'sweetalert2';

const BiodataSettingComponent = () => {
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const[ userdata,akun ] = useAkunStore((state) => [state.userdata,state.akun])

  const handleFormInput = (e) => {
    const {name,value} = e.target
    setforminput(name,value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const senddata = async() => {
      try{
        let res = await axios.put(`${process.env.REACT_APP_URL_API}akun/${akun.akun_id}`,forminput)
        Swal.fire(
          "Akun berhasil diedit"
        )
      }
      catch(e){
        console.log(e)
      }
    }
    senddata()
  }

  useEffect(() => {
    setTimeout(() => {
      setforminput("no_telepon",akun.no_telepon)
      setforminput("email",akun.email)
      for(const key in userdata){
        setforminput(key,userdata[key])
      }
    },1000)
  },[userdata])

  useEffect(() => {
    console.log(forminput)
    console.log(userdata)
  })

  return(
    <Box className='w-3/4'>
      <h2 className='font-bold text-xl mb-6 '>Biodata Diri</h2>
      <form onSubmit={handleSubmit}>

      <Box className='mb-6'>
        <Box className='mb-4' >
          <FormLabel>Nama</FormLabel>
          <Input type="text" className='' onChange={handleFormInput} name="nama" value={forminput.nama} />
        </Box>
        <Box className='flex gap-2 mb-4'>
         <Box className='w-1/2' >
           <FormLabel>Jenis Kelamin</FormLabel>
           <Select name='jenis_kelamin' onChange={handleFormInput} value={forminput.jenis_kelamin}>
            <option>Pilih</option>
            <option value="L">Laki Laki</option>
            <option value="P">Perempuan</option>
           </Select>
         </Box>
         <Box className='w-1/2'>
           <FormLabel>No Telepon</FormLabel>
           <Input type="number" onChange={handleFormInput}  className='' name="no_telepon" value={forminput.no_telepon} />
         </Box>
        </Box>
        <Box className='flex gap-2'>
         <Box className='w-1/2' >
           <FormLabel>Email</FormLabel>
           <Input type="email" onChange={handleFormInput} className='' name="email" value={forminput.email} />
         </Box>
         <Box className='w-1/2'>
           <FormLabel>Tanggal Lahir</FormLabel>
           <Input type="date" onChange={handleFormInput} className='' name="tanggal_lahir" value={forminput.tanggal_lahir} />
         </Box>
        </Box>
      </Box>
      <Button type='submit' style={{backgroundColor:"#79AC78",color:"white"}}>Simpan</Button>
      </form>
    </Box>
  )
}

export default BiodataSettingComponent