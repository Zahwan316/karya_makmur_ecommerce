import React, { useState, useEffect } from 'react';
import DefaultLayout from '../component/layout/layout';
import KategoriCard from '../component/card/kategori_card';

const KategoriPage = () => {
    return(
        <DefaultLayout>
            <h2 className='font-bold text-lg mb-4'>Kategori</h2>
            <div className='flex flex-wrap gap-6'>
                <KategoriCard />
                <KategoriCard />
                <KategoriCard />
                <KategoriCard />
                <KategoriCard />
            </div>
        </DefaultLayout>
    )
}

export default KategoriPage