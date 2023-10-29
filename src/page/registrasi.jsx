import React, { useState, useEffect } from 'react';
import LoginLayoutComponent from '../component/layout/loginlayout';
import { Box, Button, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Textarea } from '@chakra-ui/react';
import CIcon from '@coreui/icons-react';
import { cilEnvelopeClosed, cilLocationPin, cilLockLocked, cilPhone, cilUser } from '@coreui/icons';
import useFormStore from './../state/form';
import axios  from 'axios';
import Swal  from 'sweetalert2';
import {useNavigate}  from 'react-router-dom';
import validator  from 'validator';


const RegistrasiPage = () => {
  const [page,setpage] = useState(0)
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const [errors,seterror] = useState({})
  const navigate = useNavigate()
  const dataforminput = [
    "no_telepon",
    "nama",
    "email",
    "password",
    "confirm_password",
    "jenis_kelamin",
    "alamat"
  ]

  const redirectToLogin = () => {
    navigate("/login")
  }

  const handleforminput = (e) => {
    const{name,value} = e.target
    setforminput(name,value)
  }

  const handleradioinput = (e) => {
    setforminput("jenis_kelamin",e.target.value)
  } 

  const validateinput = () => {
    const error = {}
    if(page === 0){
      if(forminput.no_telepon == ""){
        error.no_telepon = "Nomor Telepon Tidak Boleh Kosong"
      }
      else if(!validator.isMobilePhone(forminput.no_telepon,"id-ID")){
        error.no_telepon = "Nomor Telepon Tidak Benar"
      }
    }
    else if(page === 1){
      if(forminput.nama.length === 0){
        error.nama = "Nama Tidak Boleh Kosong"
      }
      if(forminput.email.length === 0){
        error.email = "Email tidak boleh kosong"
      }
      else if(!validator.isEmail(forminput.email)){
        error.email = "Email tidak valid"
      }
      if(forminput.password.length === 0){
        error.password = "Password tidak boleh kosong"
      }
      else if(!validator.isAlphanumeric(forminput.password) && validator.matches(forminput.password,/[a-zA-Z]/) && !validator.matches(forminput.password,/\d/)){
        error.password = "Password setidaknya mengandung huruf dan 1 angka"
      }
      else if(!validator.isLength(forminput.password,{min:8})){
        error.password = "Password tidak boleh kurang dari 8"
      }
      if(forminput.confirm_password != forminput.password){
        error.confirm_password = "Konfirmasi password harus sama dengan password"
      }
    }
    else if(page === 2){
      if(forminput.jenis_kelamin.length === 0){
        error.jenis_kelamin = "Jenis kelamin tidak boleh kosong"
      }
      if(forminput.alamat.length === 0){
        error.alamat = "Alamat tidak boleh kosong"
      }
    }

    seterror(error)
    return Object.keys(error).length === 0
  }

  const handlepage = () => {
    if(validateinput()){
      setpage(prev => prev + 1)
    }
  }

  const handleSendData = async() => {
    try{
      if(validateinput()){
        let res = await axios.post(`${process.env.REACT_APP_URL_API}register`,forminput)
        console.log(res.data)
        Swal.fire(
          res.data.message,
          "Anda Akan Diarahkan Ke Halaman Login"
        )
        setTimeout(() => {
          navigate("/login")
        },500)

      }
    }
    catch(e){
      console.log(e)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    handleSendData()
  }

  useEffect(() => {
    console.log(forminput)
    console.log(errors)
  })

  useEffect(() => {
    for(const data in dataforminput){
      setforminput(dataforminput[data],"")
    }
  },[])

  return(
    <LoginLayoutComponent img="./img/bgregister.jpg">
      <Box className='flex justify-center items-center flex-col w-full p-6'>
        <h2 className='font-bold text-4xl mb-8'>Registrasi</h2>
         <Box className='flex flex-col w-full mb-6'>
          <form onSubmit={handleSubmit}>
             {
                 page === 0 &&
                 <Box>
                  <FormLabel>Nomor Telepon</FormLabel>
                  <InputGroup className='mb-1'>
                    <InputLeftElement>
                     <CIcon icon={cilPhone} className='w-5 h-5' />
                    </InputLeftElement>
                    <Input 
                    type="number" 
                    maxLength={13} 
                    placeholder='Masukan Nomor Telepon' 
                    name="no_telepon" 
                    isInvalid={errors.no_telepon}  
                    onChange={handleforminput} 
                    required />
                  </InputGroup>  
                  {
                    errors.no_telepon &&
                    <span className='text-red-500 mb-4'>*{errors.no_telepon}</span>

                  }
                  <p>Sudah Mempunyai Akun?<span onClick={redirectToLogin} className='hover:underline' style={{color:"#79AC78",cursor:"pointer"}}>Masuk Sekarang</span></p> 
                 </Box>
             }
             {
                 page === 1 &&
                 <>
                  <Box className='mb-4'>
                   <FormLabel>Nama Lengkap</FormLabel>
                   <InputGroup>
                     <InputLeftElement>
                      <CIcon icon={cilUser} className='w-5 h-5' />
                     </InputLeftElement>
                     <Input 
                     type="text" 
                     isInvalid={errors.nama} 
                     required 
                     onChange={handleforminput} 
                     name="nama" 
                     placeholder='Masukan Nama Lengkap' />
                   </InputGroup> 
                   {
                    errors.nama &&
                    <span className='text-red-500'>*{errors.nama}</span>
                   }  
                  </Box>
                  <Box className='mb-4'>
                   <FormLabel>Email</FormLabel>
                   <InputGroup>
                     <InputLeftElement>
                      <CIcon icon={cilEnvelopeClosed} className='w-5 h-5' />
                     </InputLeftElement>
                     <Input 
                     type="email" 
                     isInvalid={errors.email}
                     required 
                     onChange={handleforminput} 
                     name="email" 
                     placeholder='Masukan Email' />
                   </InputGroup>   
                   {
                    errors.email &&
                    <span className='text-red-500'>*{errors.email}</span>
                   }  
                  </Box>
                  <Box className='mb-4'>
                   <FormLabel>Password</FormLabel>
                   <InputGroup>
                     <InputLeftElement>
                      <CIcon icon={cilLockLocked} className='w-5 h-5' />
                     </InputLeftElement>
                     <Input 
                     type="password" 
                     isInvalid={errors.password}
                     required 
                     onChange={handleforminput} 
                     name="password" 
                     placeholder='Masukan Password' />
                   </InputGroup>   
                   {
                    errors.password &&
                    <span className='text-red-500'>*{errors.password}</span>
                   }  
                  </Box>
                  <Box className='mb-4'>
                   <FormLabel>Konfirmasi Password</FormLabel>
                   <InputGroup>
                     <InputLeftElement>
                      <CIcon icon={cilLockLocked} className='w-5 h-5' />
                     </InputLeftElement>
                     <Input 
                     type="password" 
                     isInvalid={errors.confirm_password}
                     name="confirm_password" 
                     onChange={handleforminput} 
                     placeholder='Konfirmasi Password' />
                   </InputGroup>   
                   {
                    errors.confirm_password &&
                    <span className='text-red-500'>*{errors.confirm_password}</span>
                   }  
                  </Box>
                 </>
             }
             {
                 page === 2 &&
                 <>
                   <Box className='mb-4'>
                     <FormLabel>Jenis Kelamin</FormLabel>
                     <RadioGroup className='flex gap-5'>
                      <Radio value="L" onChange={handleradioinput} >Laki Laki</Radio>
                      <Radio value="P" onChange={handleradioinput} >Perempuan</Radio>
                     </RadioGroup>   
                     {
                      errors.jenis_kelamin &&
                      <span className='text-red-500'>*{errors.jenis_kelamin}</span>
                   }  
                   </Box>
                   <Box className='mb-6'>
                    <FormLabel>Alamat</FormLabel>
                    <InputGroup>
                      <Textarea name="alamat" isInvalid={errors.alamat} required onChange={handleforminput} placeholder='Masukan Alamat' height={"40"} />
                    </InputGroup>   
                    {
                      errors.alamat &&
                      <span className='text-red-500'>*{errors.alamat}</span>
                    }  
                  </Box>
                 </>
             }
             {
               page == 2 &&
               <Button colorScheme='green' className='w-full' type="submit">Selesai</Button>
             }
         </form>
         </Box>
        {
          page < 2 &&
          <Button colorScheme='green' className='w-full' onClick={handlepage}>Selanjutnya</Button>

        }
      </Box>
    </LoginLayoutComponent>
  )
}

export default RegistrasiPage