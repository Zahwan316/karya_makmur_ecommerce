import React, { useState, useEffect } from 'react';
import CardComponent from '../card/card';

const LainnyaDetailComponent = () => {
    return(
        <div>
            <h2 className='font-bold text-xl mb-4'>Lainnya</h2>
            <div className='flex-row flex gap-6'>
                <CardComponent
                 src="./img/sofa.jpg"
                 nama="Sofa Premium Gray" 
                 rating="4.0"
                 terjual="2"
                 harga="2.000.000"
                />
                <CardComponent
                 src="./img/lemari.jpg"
                 nama="Sofa Premium Gray" 
                 rating="4.0"
                 terjual="2"
                 harga="2.000.000"
                />
                <CardComponent
                 src="./img/banner.jpg"
                 nama="Sofa Premium Gray" 
                 rating="4.0"
                 terjual="2"
                 harga="2.000.000"
                />
            </div>
        </div>
    )
}

export default LainnyaDetailComponent
