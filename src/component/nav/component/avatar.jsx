import { Avatar } from '@chakra-ui/avatar';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAkunStore from '../../../state/akun';
import { Box } from '@chakra-ui/react';

const AvatarProfileComponent = () => {
    const navigate = useNavigate()
    const token = Cookies.get("token")
    const [akun,isLogin,setakun,setuserdata,userdata] = useAkunStore((state) => [state.akun,state.islogin,state.setakun,state.setuserdata,state.userdata])
    const [error,seterror] = useState({})

    const redirectToSettings = () => {
     if(!token){
      navigate("/login")
     }
     else{
       navigate("/settings/biodata")
     }
    }

    const redirectToLogin = () => {
     navigate("/login")
    }

    const handleLogout = () => {
        Cookies.remove("token")
        window.location.reload()
    }

    useEffect(() => {
      const fetchdata = async() =>{
        try{
          let res = await axios.get(`${process.env.REACT_APP_URL_API}auth/akun/${token}`,{
            withCredentials:true,
            headers:{
                Authorization:`Bearer ${token}`
            }
        
          })
          const data = res.data.data
          const user = res.data.user
          setakun(data)
          setuserdata(user)
          console.log(res)
        }
        catch(e){
          console.log(e)
          e.response.data.message.message == "jwt expired" && Cookies.remove("token")
        }
      }
      fetchdata()
    },[])

    useEffect(() => {
        console.log(error)
    })


    return(
        <>
         <Menu className="">
            <MenuButton>
                <Avatar />
            </MenuButton>
            <MenuList>
              <Box className='flex justify-center mb-2 items-center h-10'>
                <h2 className='font-bold'>{userdata.nama ? userdata.nama : "Login terlebih dahulu"}</h2>
              </Box>
                <MenuItem className='mb-3' onClick={redirectToSettings}>Pengaturan</MenuItem>
                <hr />
                {
                    token ?
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    :
                    <MenuItem onClick={redirectToLogin}>Login</MenuItem>
                }
            </MenuList>
        </Menu>
        </>
    )
}

export default AvatarProfileComponent