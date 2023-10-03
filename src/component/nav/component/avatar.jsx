import { Avatar } from '@chakra-ui/avatar';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import React, { useState, useEffect } from 'react';

const AvatarProfileComponent = () => {
    return(
        <>
         <Menu className="">
            <MenuButton>
                <Avatar />
            </MenuButton>
            <MenuList>
                <MenuItem className='mb-3'>Profile</MenuItem>
                <hr />
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
        </>
    )
}

export default AvatarProfileComponent