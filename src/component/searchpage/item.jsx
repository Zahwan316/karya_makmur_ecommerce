import { Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';

const ItemSearchPageComponent = () => {
    return(
        <div>
            <div className='flex items-center mb-8'> 
                <h2 className='mr-2'>Urutkan : </h2>
                <div>
                    <Select>
                        <option>Harga Terendah</option>
                        <option>Harga Tertinggi</option>
                        <option>Terbaru</option>
                    </Select>
                </div>
            </div>
            <div className='flex flex-wrap gap-6'>
                <CardComponent
                    nama="Lemari"
                    slug="lemari"
                    src="../img/lemari.jpg"
                    harga="500.000"
                    rating="4.5"
                />
                <CardComponent
                    nama="Sofa Premium Warna Gray"
                    slug="sofa-premium-warna-gray"
                    src="../img/sofa.jpg"
                    harga="500.000"
                    rating="4.5"
                />
                <CardComponent
                    nama="Lemari"
                    slug="lemari"
                    src="../img/lemari.jpg"
                    harga="500.000"
                    rating="4.5"
                />
                <CardComponent
                    nama="Lemari"
                    slug="lemari"
                    src="../img/lemari.jpg"
                    harga="500.000"
                    rating="4.5"
                />
            </div>
        </div>
    )
}

export default ItemSearchPageComponent