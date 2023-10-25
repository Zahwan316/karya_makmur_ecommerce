import { Box, Button, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import LoginLayoutComponent from '../component/layout/loginlayout';
import CIcon from '@coreui/icons-react';
import { cilEnvelopeClosed, cilLockLocked, cilUser } from '@coreui/icons';
import { Form } from 'react-router-dom';

const LoginPage = () => {
  return(
    <LoginLayoutComponent img="./img/bglogin.jpg">
        <Box className='flex flex-col w-full justify-center items-center'>
            <Box className='mb-8 w-full flex justify-center'>
              <h2 className='font-bold text-2xl'>Login</h2>
            </Box>
            <Box className='w-full p-5'>
              <form onSubmit={"test"}> 
              <InputGroup className='mb-4'>
                <InputLeftElement>
                  <CIcon icon={cilEnvelopeClosed} className='w-5 h-5' />
                </InputLeftElement>
                <Input type="text" className='w-full' placeholder='Email' />
              </InputGroup>
              <InputGroup className='mb-4'>
                <InputLeftElement>
                  <CIcon icon={cilLockLocked} className='w-5 h-5' />
                </InputLeftElement>
                <Input type="password" className='w-full' placeholder='Password' />
              </InputGroup>
              <Box className='mb-6'>
                <p className=''>Belum Mempunyai Akun? <a href="" style={{color:"#79AC78"}}>Registrasi Sekarang</a></p>
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