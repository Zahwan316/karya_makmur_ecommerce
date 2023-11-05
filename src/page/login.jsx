import { Box, Button, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import LoginLayoutComponent from '../component/layout/loginlayout';
import CIcon from '@coreui/icons-react';
import { cilEnvelopeClosed, cilLockLocked, cilUser } from '@coreui/icons';
import { Form, useNavigate } from 'react-router-dom';
import useFormStore from './../state/form';
import validator from "validator"
import Swal from "sweetalert2"
import axios  from 'axios';
import Cookies from "js-cookie"

const LoginPage = () => {
  const [forminput,setforminput] = useFormStore((state) => [state.form,state.setform])
  const [errors,seterrors] = useState({})
  const navigate = useNavigate()

  const handleFormInput = (e) => {
    setforminput(e.target.name,e.target.value)
  }

  const redirectToRegister = () => {
    navigate("/registrasi")
  }

  const validateInput = () => {
    const error = {}
    if(!validator.isEmail(forminput.email)){
      error.email = "Email tidak valid"
    }
    if(!validator.isLength(forminput.password,{min:8})){
      error.password = "Panjang password kurang dari 8 huruf"
    }
    seterrors(error)
    return Object.keys(error).length === 0
  }

  const sendData = async() => {
    try{
      if(validateInput()){
        let res = await axios.post(`${process.env.REACT_APP_URL_API}login`,forminput)
        Swal.fire({
          icon:"success",
          title:res.data.message,
          showConfirmButton:false
        }
        )
        Cookies.set("token",res.data.token,{expires:2,})
        setTimeout(() => {
          window.location.href = "/"
        },500)
      }
    }
    catch(e){
      console.log(e)
      Swal.fire({
        icon:"error",
        title:e.response.data.message,
      }
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    sendData()
  }

  return(
    <LoginLayoutComponent img="./img/bglogin.jpg">
        <Box className='flex flex-col w-full justify-center items-center'>
            <Box className='mb-8 w-full flex justify-center'>
              <h2 className='font-bold text-4xl'>Login</h2>
            </Box>
            <Box className='w-full p-5'>
              <form onSubmit={handleSubmit}> 
              <div className='mb-4'>
                <InputGroup className='mb-2' >
                  <InputLeftElement>
                    <CIcon icon={cilEnvelopeClosed} className='w-5 h-5' />
                  </InputLeftElement>
                  <Input type="text" className='w-full' placeholder='Email' name="email" onChange={handleFormInput} required />
                </InputGroup>
                {
                  errors.email &&
                  <span className='text-red-500'>*{errors.email}</span>
                 
                }
              </div>
              <div className='mb-4'>
                <InputGroup className='mb-2'>
                  <InputLeftElement>
                    <CIcon icon={cilLockLocked} className='w-5 h-5'  />
                  </InputLeftElement>
                  <Input type="password" className='w-full' placeholder='Password' name="password" onChange={handleFormInput} required />
                </InputGroup>
                {
                  errors.password &&
                  <span className='text-red-500'>*{errors.password}</span>
                }
              </div>
                <Box className='mb-6'>
                  <p className=''>Belum Mempunyai Akun? <span onClick={redirectToRegister} className='hover:underline'  style={{color:"#79AC78",cursor:"pointer"}}>Registrasi Sekarang</span></p>
                </Box>
                <Box className='flex justify-center'>
                  <Button type="submit" className='w-64' colorScheme='green'>Login</Button>
                </Box>
              </form>
            </Box>
        </Box>
    </LoginLayoutComponent>
  )
}

export default LoginPage