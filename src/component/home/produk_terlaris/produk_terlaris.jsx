import React, { useState, useEffect } from 'react';
import CardComponent from '../../card/card';

const ProdukTerlarisComponent = () => {
    return(
        <div className='mb-5'>
            <h2 className='font-bold mb-4 text-lg'>Produk Terlaris</h2>
            <div className='flex flex-wrap gap-6 '>
                <CardComponent
                    src="../img/sofa.jpg"
                    nama="Sofa Premium Mewah Warna Gray"
                    harga="2.000.000"
                    rating="4.0"
                    terjual="20"
                />

            </div>
        </div>
    )
}

export default ProdukTerlarisComponent