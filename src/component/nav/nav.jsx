import { Avatar } from '@chakra-ui/avatar';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import React, { useState, useEffect } from 'react';
import AvatarProfileComponent from './component/avatar';
import {cilCart} from "@coreui/icons"
import  CIcon  from '@coreui/icons-react';
import { useNavigate } from 'react-router-dom';
import {ReactSearchAutocomplete } from "react-search-autocomplete"


const NavComponent = (props) => {
    const navigate = useNavigate()

    const backToHome = () => {
        navigate("/")
    }

    const navigateToCart = () => {
        navigate("/keranjang")
    }

    return(
        <nav className='flex flex-row h-20 p-6 items-center mb-8 fixed w-full z-50 bg-white' >
            <div className='mr-4 w-13' >
                <h2 style={{color:"#79AC78",fontWeight:"bold"}} className='cursor-pointer' onClick={backToHome}>Karya Makmur</h2>
            </div>
            <div className='w-5/6'>
                <FormControl>
                    <ReactSearchAutocomplete />
                </FormControl>
            </div>
            <div className='w-8 mx-2'>
                <CIcon icon={cilCart} size='sm' className='cursor-pointer' onClick={navigateToCart} />
            </div>
            <div className='ml-3'>
                <AvatarProfileComponent />
            </div>
        </nav>
    )
}

export default NavComponent