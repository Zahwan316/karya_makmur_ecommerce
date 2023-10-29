import { Avatar } from '@chakra-ui/avatar';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAkunStore from '../../../state/akun';

const AvatarProfileComponent = () => {
    const navigate = useNavigate()
    const token = Cookies.get("token")
    const {akun,isLogin,setakun} = useAkunStore()

    const redirectToSettings = () => {
     navigate("/settings/biodata")
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
          let res = await axios.get(`${process.env.REACT_APP_URL_API}`,{
            withCredentials:true,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
          console.log(res)
        }
        catch(e){
          console.log(e)
        }
      }
      fetchdata()
    },[])

    useEffect(() => {
        console.log(akun)
    })


    return(
        <>
         <Menu className="">
            <MenuButton>
                <Avatar />
            </MenuButton>
            <MenuList>
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