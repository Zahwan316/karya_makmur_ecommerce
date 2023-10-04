import { ListItem, UnorderedList } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const SpesifikasiProdukComponent = () => {
    return (
        <div>
            <h2 className='font-bold text-2xl mb-4' style={{color:"#79AC78"}}>Spesifikasi Produk</h2>
            <div>
                <UnorderedList>
                    <ListItem>Lorem ipsum Dolor</ListItem>
                    <ListItem>Lorem ipsum Dolor</ListItem>
                    <ListItem>Lorem ipsum Dolor</ListItem>
                    <ListItem>Lorem ipsum Dolor</ListItem>
                </UnorderedList>
            </div>
        </div>
    )
}

export default SpesifikasiProdukComponent