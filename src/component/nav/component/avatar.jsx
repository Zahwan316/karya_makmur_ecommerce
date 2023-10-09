import { Avatar } from '@chakra-ui/avatar';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AvatarProfileComponent = () => {
    const navigate = useNavigate()

    const redirectToSettings = () => {
     navigate("/settings/biodata")
    }

    return(
        <>
         <Menu className="">
            <MenuButton>
                <Avatar />
            </MenuButton>
            <MenuList>
                <MenuItem className='mb-3' onClick={redirectToSettings}>Pengaturan</MenuItem>
                <hr />
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
        </>
    )
}

export default AvatarProfileComponent